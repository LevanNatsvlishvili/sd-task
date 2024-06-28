import HeroBlock from './pages/home/home';

/* eslint-disable react/no-unescaped-entities */
function App() {
  return (
    <>
      <div className="hero_area">
        <HeroBlock />
      </div>
      <section className="category_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-xl-2 px-0">
              <a href="#" className="box">
                <div className="img-box">
                  <img src="images/c1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Web Design</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2 px-0">
              <a href="#" className="box">
                <div className="img-box">
                  <img src="images/c2.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Web Development</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2 px-0">
              <a href="#" className="box">
                <div className="img-box">
                  <img src="images/c3.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Graphic Design</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2 px-0">
              <a href="#" className="box">
                <div className="img-box">
                  <img src="images/c4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Seo marketing</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2 px-0">
              <a href="#" className="box">
                <div className="img-box">
                  <img src="images/c5.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Accounting</h5>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-2 px-0">
              <a href="#" className="box">
                <div className="img-box">
                  <img src="images/c6.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Content Writing</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web page editors has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web page editors
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>RECENT & FEATURED JOBS</h2>
          </div>
          <div className="job_container">
            <h4 className="job_heading">Featured Jobs</h4>
            <div className="row">
              <div className="col-lg-6">
                <div className="box">
                  <div className="job_content-box">
                    <div className="img-box">
                      <img src="images/job_logo1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Development Team Lead</h5>
                      <div className="detail-info">
                        <h6>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>Washington. D.C.</span>
                        </h6>
                        <h6>
                          <i className="fa fa-money" aria-hidden="true"></i>
                          <span>$1200 - $1300</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="option-box">
                    <button className="fav-btn">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <a href="" className="apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box">
                  <div className="job_content-box">
                    <div className="img-box">
                      <img src="images/job_logo2.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Make my website responsive device compatible</h5>
                      <div className="detail-info">
                        <h6>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>New York</span>
                        </h6>
                        <h6>
                          <i className="fa fa-money" aria-hidden="true"></i>
                          <span>$200 - $340</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="option-box">
                    <button className="fav-btn">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <a href="" className="apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job_container">
            <h4 className="job_heading">Recent Jobs</h4>
            <div className="row">
              <div className="col-lg-6">
                <div className="box">
                  <div className="job_content-box">
                    <div className="img-box">
                      <img src="images/job_logo3.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Looking Graphic Designer (Logo + UI)</h5>
                      <div className="detail-info">
                        <h6>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>Washington. D.C.</span>
                        </h6>
                        <h6>
                          <i className="fa fa-money" aria-hidden="true"></i>
                          <span>$1200/mo</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="option-box">
                    <button className="fav-btn">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <a href="" className="apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box">
                  <div className="job_content-box">
                    <div className="img-box">
                      <img src="images/job_logo6.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Are you Typography Expert?</h5>
                      <div className="detail-info">
                        <h6>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>New York</span>
                        </h6>
                        <h6>
                          <i className="fa fa-money" aria-hidden="true"></i>
                          <span>$56 - $90</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="option-box">
                    <button className="fav-btn">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <a href="" className="apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box">
                  <div className="job_content-box">
                    <div className="img-box">
                      <img src="images/job_logo5.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Looking WordPress Developer for ThemeForest</h5>
                      <div className="detail-info">
                        <h6>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>Washington. D.C.</span>
                        </h6>
                        <h6>
                          <i className="fa fa-money" aria-hidden="true"></i>
                          <span>$400 - $540</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="option-box">
                    <button className="fav-btn">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <a href="" className="apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box">
                  <div className="job_content-box">
                    <div className="img-box">
                      <img src="images/job_logo4.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Hiring Web Designer for Project</h5>
                      <div className="detail-info">
                        <h6>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>Washington. D.C.</span>
                        </h6>
                        <h6>
                          <i className="fa fa-money" aria-hidden="true"></i>
                          <span>$350 - $450</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="option-box">
                    <button className="fav-btn">
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </button>
                    <a href="" className="apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">View All</a>
          </div>
        </div>
      </section>

      <section className="expert_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>LOOKING FOR EXPERTS?</h2>
            <p>
              Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla
              mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/e1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <a href="">Martin Anderson</a>
                  <h6 className="expert_position">
                    <span>Web Anaylzer</span>
                    <span>41 Jobs Done</span>
                  </h6>
                  <span className="expert_rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam
                    nulla mauris iaculis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/e2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <a href="">Semanta Klores</a>
                  <h6 className="expert_position">
                    <span>Graphic Designer</span>
                    <span>32 Jobs Done</span>
                  </h6>
                  <span className="expert_rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam
                    nulla mauris iaculis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="images/e3.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <a href="">Ryan Martines</a>
                  <h6 className="expert_position">
                    <span>SEO Expert</span>
                    <span>27 Jobs Done</span>
                  </h6>
                  <span className="expert_rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam
                    nulla mauris iaculis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">View All Freelancers</a>
          </div>
        </div>
      </section>

      <section className="info_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-2 info_links">
              <h4>Menu</h4>
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a className="" href="job.html">
                    Jobs
                  </a>
                </li>
                <li>
                  <a className="" href="freelancer.html">
                    Freelancers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Jobs</h4>
              <p>
                Established fact that a reader will be distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum
              </p>
            </div>
            <div className="col-md-3">
              <div className="info_social">
                <h4>Social Link</h4>
                <div className="social_container">
                  <div>
                    <a href="">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info_form">
                <h4>Newsletter</h4>
                <form action="">
                  <input type="text" placeholder="Enter Your Email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
