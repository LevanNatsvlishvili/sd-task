const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const prisma = new PrismaClient();
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(express.json());
app.use(cors(corsOptions));

const seedDatabase = async () => {
  const cities = [{ name: 'New York City' }, { name: 'Washington' }];
  const parkingArea = [
    { name: 'parkingArea 1', cityId: 1 },
    { name: 'parkingArea 1', cityId: 2 },
    { name: 'parkingArea 2', cityId: 2 },
  ];

  for (const city of cities) {
    try {
      await prisma.city.upsert({
        where: { name: city.name },
        update: {},
        create: city,
      });
    } catch (error) {
      console.error(`Error adding city ${city.name}:`, error);
    }
  }
  for (const area of parkingArea) {
    try {
      await prisma.parkingArea.upsert({
        where: {
          name_cityId: {
            name: area.name,
            cityId: area.cityId,
          },
        },
        update: {},
        create: area,
      });
    } catch (error) {
      console.error(`Error adding parking area ${area.name}:`, error);
    }
  }
};

// Register user
app.post('/register', async (req, res) => {
  const { name, email, address, carPlateNumber } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        address,
        carPlateNumber,
      },
    });
    res.json(user);
  } catch (e) {
    if (e.code === 'P2002') {
      res.status(409).send('User already exists');
    } else {
      res.status(500).send('Internal server error');
    }
  }
});

// Login user
app.post('/login', async (req, res) => {
  const { email, carPlateNumber } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
        carPlateNumber,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(401).send('Invalid login credentials');
    }
  } catch (e) {
    res.status(500).send('Internal server error');
  }
});

// Get cities
app.get('/city', async (req, res) => {
  try {
    const cities = await prisma.city.findMany();
    console.log(cities);
    if (cities) {
      res.json(cities);
    } else {
      res.status(401).send('Invalid login credentials');
    }
  } catch (e) {
    console.log(e);
    res.status(500).send('Internal server error');
  }
});
// Get parkingArea
app.get('/parkingArea/:id', async (req, res) => {
  const { id } = req.params;
  try {
    if (Number(id) !== NaN) {
      const cities = await prisma.parkingArea.findMany({
        where: { cityId: Number(id) },
      });
      console.log(cities);
      if (cities) {
        res.json(cities);
      } else {
        res.status(401).send('Invalid login credentials');
      }
    }
  } catch (e) {
    console.log(e);
    res.status(500).send('Internal server error');
  }
});

// Start parking
app.post('/start-parking', async (req, res) => {
  const { userId, cityId, parkingAreaId } = req.body;
  try {
    const parking = await prisma.parking.create({
      data: {
        userId,
        cityId,
        parkingAreaId,
        startTime: new Date(),
        price: 0,
      },
    });
    res.json(parking);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

// Stop parking
app.post('/stop-parking', async (req, res) => {
  const { parkingId } = req.body;
  try {
    const parking = await prisma.parking.update({
      where: { id: parkingId },
      data: { endTime: new Date() },
    });

    // Calculate price based on city
    const city = await prisma.city.findUnique({
      where: { id: parking.cityId },
    });

    const duration = (new Date(parking.endTime) - new Date(parking.startTime)) / (1000 * 60 * 60); // in hours
    let price = 0;

    if (city.name === 'New York City') {
      price = duration * 5;
    } else if (city.name === 'Washington') {
      const startHour = new Date(parking.startTime).getHours();
      const endHour = new Date(parking.endTime).getHours();
      if ((startHour >= 8 && startHour <= 20) || (endHour >= 8 && endHour <= 20)) {
        price = duration * 2;
      } else {
        price = duration * 5;
      }
    }

    await prisma.parking.update({
      where: { id: parkingId },
      data: { price },
    });

    res.json({ ...parking, price });
  } catch (e) {
    res.status(500).send('Internal server error');
  }
});

// Get all parking records for a user
app.get('/user/:email/parkings', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { Parkings: true },
    });
    if (user) {
      res.json(user.Parkings);
    } else {
      res.status(404).send('User not found');
    }
  } catch (e) {
    res.status(500).send('Internal server error');
  }
});

app.listen(port, async () => {
  await seedDatabase();
  console.log(`Example app listening on port ${port}`);
});
