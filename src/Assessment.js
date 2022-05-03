import React from "react";
import "./assessment.css";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import PromotionImage from "./assets/PromotionImage.png";
import Product1 from "./assets/Product1.png";
import Product2 from "./assets/Product2.png";
import Product3 from "./assets/Product3.png";
import img2 from "./assets/img2.png";
import img6 from "./assets/img6.png";
import img8 from "./assets/img8.png";
import { AiFillStar } from "react-icons/ai";
import shoenav from "./assets/shoenav.png";
import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { FaUserAstronaut } from "react-icons/fa";
import kronoss from "./assets/kronoss.png";
import kronos from "./assets/kronos.png";
import nike from "./assets/nike.png";
import figma from "./assets/figma.png";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import ecom from "./assets/ecom.png";
import ecom1 from "./assets/ecom1.png";
import { NavDropdown} from "react-bootstrap";

function Assessment() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col nav p-3 bg-light h6">
            <span className="col-8">
              <span className="ms-4">
                EN
                <RiArrowDownSFill />
              </span>
              <span className="ms-2">
                USD
                <RiArrowDownSFill />
              </span>
            </span>
            <span className="col-4 ms-auto pe-5">
              <span className="me-5 ">
                <CgProfile size="20px" />
                <span className="ps-1">My Profile</span>
              </span>
              <span className="me-5">
                <BsCart2 />
                &nbsp;&nbsp;Items
              </span>
              <span className="me-5">
                <span className="text-26">$0.00</span>
                <GrFormSearch size="25px" />
              </span>
            </span>
          </div>

          <div className="col-12 nav p-3 bg-light h6">
            <span className="ms-4 col-4">
              <img src={ecom} />
              E-commerce
            </span>
            <span className="ms-auto d-flex justify-content-between">
              <span className="me-5 pe-5 text-primary">
                <NavDropdown
                  title="HOME"
                  className="text-primary d-flex col-8 "
                >
                  <div classname="row">
                    <div className="d-flex justify-content-between color fw-bold ps-5 ms-5 ">
                      <span className="col-3">Category</span>
                      <span className="col-3">Category</span>
                      <span className="col-3">Category</span>
                    </div>
                  </div>
                  <div className="row pt-5 pb-4 ps-4 d-flex justify-content-between">
                    <div className="col-3">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                    <div className="col-2">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                    <div className="col-2">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                    <div className="col-2">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                    <div className="col-2">
                      <div className="pb-3">Corporate Shoes</div>
                      <div className="pb-3">Sneakers</div>
                      <div className="pb-3">Sandals</div>
                      <div className="pb-3">Sport Shoes</div>
                      <div className="pb-3">Trainers</div>
                    </div>
                  </div>
                </NavDropdown>
              </span>
              <span className="me-5 pe-5 pt-2">BAGS</span>
              <span className="me-5 pe-5 pt-2">SNEAKERS</span>
              <span className="me-5 pe-5 pt-2">BELT</span>
              <span className="me-5 pe-5 pt-2">CONTACT</span>
            </span>
          </div>

          <div>
            <h1 className="imagetext ">
              Super Flash Sale <br /> 50% Offer
            </h1>
            <img
              src={PromotionImage}
              class="img-fluid"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="container cardPair fw-bold">
          <div className="row px-5 mx-5">
            <div className="col-4 border-0 fs pe-0 ">
              <div className="card1">
                <span className="pt-3">QUILTED MAXI CROSS BAG</span>
                <img src={Product1} className="productClass" />
                <div>
                  <span className="text-decoration-line-through">$534.33</span>
                  <span className="orangecolor">24% off</span>
                </div>
                <div className="text-end pricecolor mb-3 ">$599.43</div>
              </div>
            </div>
            <div className="col-4 card border-0 fs">
              <span>
                <div className="d-flex">
                  <span className="col-8 pt-3">
                    FS-Nike Air Max 270 React...
                  </span>
                  <span className="col-4 pricecolor pt-3 text-end">
                    $299.43
                  </span>
                </div>
                <img src={Product2} className="productClass1" />
                <div className="fw-bold text-center mt-3">
                  <span className="text-decoration-line-through ">$534.33</span>
                  <span className="orangecolor">24% off</span>
                </div>
              </span>
            </div>
            <div className="col-4 card border-0 fs">
              <span className="pt-3">FS-Nike Air Max 270 React...</span>
              <div className="fw-bold ">
                <span className="text-decoration-line-through">$534.33</span>
                <span className="orangecolor">24% off</span>
              </div>
              <img src={Product3} className="productClass2" />
              <span className="pricecolor ms-auto">$299.43</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h3 text-center mt-5 mb-3">Best Seller</div>
      <div className="d-flex justify-content-center">
        <span className="me-5 text-primary text-decoration-underline">All</span>
        <span className="me-5">Bags</span>
        <span className="me-5">Sneakers</span>
        <span className="me-5">Belt</span>
        <span className="me-5">Sunglasses</span>
      </div>

      <div className="row container d-flex justify-content-between ms-5 mt-5">
        <div className="col-md-3 card border-0">
          <img src={img6} alt="img-responsive" />
          <div class="mx-auto">
            <p class="product-title mb-0">Nike Air Max 2700 react</p>
            <div className="col-8 ms-2 d-flex justify-content-between mb-1">
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fs fw-bold ">
              <span className="pricecolor me-2">$299.43</span>
              <span className="text-decoration-line-through me-2">$534.33</span>
              <span className="orangecolor me-2">24%off</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 card border-0">
          <img src={img2} alt="img-responsive" />
          <div class=" mx-auto">
            <p class="product-title mb-0">Nike Air Max 2700 react</p>
            <div className="col-8 ms-2 d-flex justify-content-between mb-1">
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fs fw-bold  ">
              <span className="pricecolor me-2">$299.43</span>
              <span className="text-decoration-line-through me-2">$534.33</span>
              <span className="orangecolor me-2">24%off</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 card border-0">
          <img src={img8} alt="img-responsive" />
          <div class=" mx-auto">
            <p class="product-title mb-0">Nike Air Max 2700 react</p>
            <div className="col-8 ms-2 d-flex justify-content-between mb-1">
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fs fw-bold  ">
              <span className="pricecolor me-2">$299.43</span>
              <span className="text-decoration-line-through me-2">$534.33</span>
              <span className="orangecolor me-2">24%off</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 card border-0">
          <img src={img2} alt="img-responsive" />
          <div class=" mx-auto">
            <p class="product-title mb-0">Nike Air Max 2700 react</p>
            <div className="col-8 ms-2 d-flex justify-content-between mb-1">
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fs fw-bold  ">
              <span className="pricecolor me-2">$299.43</span>
              <span className="text-decoration-line-through me-2">$534.33</span>
              <span className="orangecolor me-2">24%off</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row container d-flex justify-content-between ms-5 mt-5">
        <div className="col-md-3 card border-0">
          <img src={img8} alt="img-responsive" />
          <div class=" mx-auto">
            <p class="product-title mb-0">Nike Air Max 270 react</p>
            <div className="col-8 ms-2 d-flex justify-content-between mb-1">
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span>
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fs fw-bold  ">
              <span className="pricecolor me-2">$299.43</span>
              <span className="text-decoration-line-through me-2">$534.33</span>
              <span className="orangecolor me-2">24%off</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 card border-0">
          <img src={img6} alt="img-responsive" />
          <div class=" mx-auto">
            <p class=" mb-0 product-title">Nike Air Max 270 react</p>
            <div className="col-8 ms-2 d-flex justify-content-between mb-1">
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span>
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fs fw-bold  ">
              <span className="pricecolor me-2">$299.43</span>
              <span className="text-decoration-line-through me-2">$534.33</span>
              <span className="orangecolor me-2">24%off</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 card border-0">
          <img src={img2} alt="img-responsive" />
          <div class=" mx-auto">
            <p class="product-title mb-0">Nike Air Max 270 react</p>
            <div className="col-8 ms-2 d-flex justify-content-between mb-1">
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span>
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fs fw-bold  ">
              <span className="pricecolor me-2">$299.43</span>
              <span className="text-decoration-line-through me-2">$534.33</span>
              <span className="orangecolor me-2">24%off</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 card border-0">
          <img src={img8} alt="img-responsive" />
          <div class=" mx-auto">
            <p class="product-title mb-0">Nike Air Max 270 react</p>
            <div className="col-8 ms-2 d-flex justify-content-between mb-1">
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span className="zoom">
                <AiFillStar />
              </span>
              <span>
                <AiFillStar color="#C1C8CE" />
              </span>
            </div>
            <div className="fs fw-bold  ">
              <span className="pricecolor me-2">$299.43</span>
              <span className="text-decoration-line-through me-2">$534.33</span>
              <span className="orangecolor me-2">24%off</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center fs-5 mt-5 mb-5">
        <a href="#" className="text-primary text-decoration-underline bor">
          Load More
        </a>
      </div>
      <div className=" backgrounfColorClass">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <div>
                <span className="h1 ms-5">
                  Adidas Men Running
                  <br />
                  <span className="ms-5">Sneakers</span>
                </span>
                <br />
                <br />
                <span className="h6 mt-5 ms-5">
                  Performance and Design.Take right to the edge
                </span>
                <br />
                <span className="ms-5 text-decoration-underline bor">
                  shop now
                </span>
              </div>
            </div>
            <div className="col-6">
              <img
                src={shoenav}
                className="mb-5 move"
                height="500px"
                width="500px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row container text-center mx-auto d-flex justify-content-between mt-5">
        <div className="col-3 card border-0">
          <FaShippingFast color="#FF6875" size="100" className="mx-auto" />
          <div class="">
            <p class="mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="col-3 card border-0">
          <RiRefund2Line color="#FF6875" size="100" className="mx-auto" />
          <div class="">
            <p class="mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="col-3 card border-0">
          <FaUserAstronaut color="#FF6875" size="100" className="mx-auto" />
          <div class="">
            <p class="mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="h3 text-center mt-5 mb-3">Latest News</div>
      <div className="row container mx-auto mb-5 mt-5">
        <div className="col-2 card border-0">
          <img src={nike} height="150px" width="150px" />
        </div>
        <div className="col-2">
          <div className="color">01 jan 2015</div>
          <div className="fw-bold">Fashion Industry</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
        </div>
        <div className="col-2 card border-0">
          <img src={figma} height="150px" width="150px" />
        </div>
        <div className="col-2">
          <div className="color">01 jan 2015</div>
          <div className="fw-bold">Best Design Tools</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
        </div>
        <div className="col-2 card border-0">
          <img src={kronoss} height="150px" width="150px" />
        </div>
        <div className="col-2">
          <div className="color">01 jan 2015</div>
          <div className="fw-bold">Hr Community</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
        </div>
      </div>

      <div></div>

      <div className="h3 text-center mt-5 mb-3">Featured Products</div>
      <div className="row container mx-auto mb-5 mt-5">
        <div className="col-2 card border-0">
          <img src={kronos} height="150px" width="150px" />
        </div>
        <div className="col-2">
          <div className="fs-5">Blue swade Nike Sneakers</div>
          <div className="col-8 mt-3">
            <span className="zoom">
              <AiFillStar />
            </span>
            <span className="zoom">
              <AiFillStar />
            </span>
            <span className="zoom">
              <AiFillStar />
            </span>
            <span className="zoom">
              <AiFillStar />
            </span>
            <span>
              <AiFillStar color="#C1C8CE" />
            </span>
          </div>
          <div className="fw-bold mt-3">
            <span className="orangecolor">$499</span>
            <span className="text-decoration-line-through color ms-2">
              $599
            </span>
          </div>
        </div>
        <div className="col-2 card border-0">
          <img src={kronos} height="150px" width="150px" />
        </div>
        <div className="col-2">
          <div className="fs-5">Blue swade Nike Sneakers</div>
          <div className="col-8 mt-3">
            <span className="zoom">
              <AiFillStar />
            </span>
            <span className="zoom">
              <AiFillStar />
            </span>
            <span className="zoom">
              <AiFillStar />
            </span>
            <span className="zoom">
              <AiFillStar />
            </span>
            <span>
              <AiFillStar color="#C1C8CE" />
            </span>
          </div>
          <div className="fw-bold mt-3">
            <span className="orangecolor">$499</span>
            <span className="text-decoration-line-through color ms-2">
              $599
            </span>
          </div>
        </div>
        <div className="col-2 card border-0">
          <img src={kronos} height="150px" width="150px" />
        </div>
        <div className="col-2">
          <div className="fs-5">Blue swade Nike Sneakers</div>
          <div className="col-8 mt-3">
            <span className="zoom">
              <AiFillStar />
            </span>
            <span className="zoom">
              <AiFillStar />
            </span>
            <span className="zoom">
              <AiFillStar />
            </span>
            <span className="zoom">
              <AiFillStar />
            </span>
            <span>
              <AiFillStar color="#C1C8CE" />
            </span>
          </div>
          <div className="fw-bold mt-3">
            <span className="orangecolor">$499</span>
            <span className="text-decoration-line-through color ms-2">
              $599
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-4 mx-auto ">
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search query..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>

      <footer className="p-5 bg mt-5">
        <div className="row container mx-auto me-5">
          <div className="col-4">
            <div className="fw-bold mb-3 l-size">
              <img src={ecom1} />
              <span className="ms-2">E-Comm</span>
            </div>
            <div className="fs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has the Induatry's standard dummy text
              ever.Since the 1500's when the unknown printer
            </div>
          </div>

          <div className="col-4">
            <div className="fw-bold mb-3 l-size">Follow Us</div>
            <div className="fs">
              Since the 1500's when the unknown printer took a gallery of type
              and scarambled
            </div>
            <div>
              <span>
                <GrFacebookOption />
              </span>
              <span className="ms-3">
                <AiOutlineTwitter color="skyblue" />
              </span>
            </div>
          </div>

          <div className="col-4">
            <div className="fw-bold mb-3 l-size">Contact Us</div>
            <div className="fs">Ecomm,7548</div>
            <div className="fs">Marmora Road</div>
            <div className="fs">Glassgow D04 89GR</div>
          </div>
        </div>

        <div className="row container mx-auto me-5 mt-5">
          <div className="col-3">
            <div className="mb-3 l-size">Information</div>
            <div className="size">About Us</div>
            <div className="size">Information</div>
            <div className="size">Privacy Policy</div>
            <div className="size">Terms & Conditions</div>
          </div>
          <div className="col-3">
            <div className="l-size mb-3">Service</div>
            <div className="size">About Us</div>
            <div className="size">Information</div>
            <div className="size">Privacy Policy</div>
            <div className="size">Terms & Conditions</div>
          </div>
          <div className="col-3">
            <div className="l-size mb-3">My Account</div>
            <div className="size">About Us</div>
            <div className="size">Information</div>
            <div className="size">Privacy Policy</div>
            <div className="size">Terms & Conditions</div>
          </div>
          <div className="col-3">
            <div className="l-size mb-3">Our Offers</div>
            <div className="size">About Us</div>
            <div className="size">Information</div>
            <div className="size">Privacy Policy</div>
            <div className="size">Terms & Conditions</div>
          </div>
        </div>

        <div className="border border-bottom mt-3"></div>
        <div className="col-4 ms-auto">
          <img src={logo1} height="30px" width="30px" className="ms-5 mt-3" />
          <img src={logo2} height="30px" width="30px" className="ms-3 mt-3" />
          <img src={logo3} height="30px" width="30px" className="ms-3 mt-3" />
          <img src={logo4} height="30px" width="30px" className="ms-3 mt-3" />
        </div>
        <div className="color-ce">
          © 2018 Ecommerce theme by www.bisenbaev.com
        </div>
      </footer>
    </div>
  );
}
export default Assessment;
