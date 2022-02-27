function navbar() {
    return `
    <nav class="navbar navbar-light nav">
        <div class="container-fluid">
          <form class="d-flex mb-2">
            <img
              class="logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcoAAABuCAMAAACQuKOiAAAAk1BMVEX///8Av78aT2kAvLwARWKd5OSXq7ZRy8uitL78//8ARmKK2dkISWQAPlwWTWjr7vB2jpzL7u7g9/e3xMytvcV0i5ny9fd3k6Ld9fWy6urS3OGUpK/S7+++7OwTUGs/aoBUdYjd4+cvYHfCztRefI49aX8hWHIAM1SGnKkAOlk7yclMb4Ph6Ovs+vrK1dtx1tZo1dUfo2cUAAAJoklEQVR4nO2da1viPBCGu1ARaltUDioeEAQXBFn//697pTNpc5gpuGslV955Pq1NSZvcTeeQpBtFIpFI1LTuzn5IV6duaejqnbd/SBenbmro6p3/+hkJyqYlKIORoAxGgjIYCcpgJCiDkaAMRoIyGAnKYCQog5GgDEaCMhgJymAkKIORoAxGgjIYCcpgJCiDkaAMRoIyGAnKYCQog5GgDEaCMhgJymAkKIORoAxGgjIYGSjVTh2KBFHEnd4mT/YO5aBTqNtjiwbm0VmHF1ULqIcnMMXjeyifMOXDmouCXtSFNJTtP7B97oIg+UEUXcCxPxZLVc3ZmfGYcChHy+mnli9McRRN3JvfTcZunxxsc2dmXjiL91q6VUU3RVE2Mo8O1jGrV6IWZAG/ShhW/d9F8XpIF/eeM/6i8MuVOlVH+QDHrgmUd0TROxx7MFG2P9QDenvMqNym+V7JiC7+VNfuwSRLnpajgdV5/fxAm+O1+bhcpq1P5RsKZVGUXppHB0mLUz7nUPYWRV2tZEWX97OiOOZQ4s95JSRK3M1qIKhBeQ3HrkyUb0g4en87BmUX+ydmH+tuTPVdmk3N91//NT/Q6OwUKLeIIn+iy31GqUj23o6ylXMEEHPGhEa575xs0df7xE+UK3X38YAs9xjlg7qJc+u9S6OcZKoznjnHgUP52devmgH6OZTJF2zleKruKl2QJxxCadhKhfWwrfwGlHfqHi5sZ4hGuVJPeh7PyBNKlKUpTNKSWar5LP0n3ZzmLfNHe/3+HpTpqutqyDyIL9XN0ibkAMpooF/lElkO9YM7PPN7UVa87uwQhUbZn5ct5fwCRJkv1a2vbqat1P3R2Oja56LePDcavTXq/VuUMRc3UNLej7QJOYSSuIO8RRZ+K8r2h6r2yq2BRDnIypay5gZR6i/g/hCHXZ4xYxlgtPKafvlblFxYQWmsGQfySl9DOfwplO03VStVA4nyWTPqCe0XlCiNjujP6318T1Cif/7KD2c/Ub5dq0rdCmiUs5bWUsYvoFFGW3g151SEH3mDcpMXl+gUTUhuiDP8RHlV1kmk/kiU0MR0iCz7xCkcSgUrpn/kB8rZGhHGrAnxEWW7dF7tTB6PEuKHPBoVXceElgzKHfRBRnesHyjBP/+8RbgWFVp6iLJ9pqq0wxAe5UuCD+0On1ryFhmUW3B8Mjp56wXK8TzHKwzg9fPsnuMfysp5vaNA0iiLzszTXTRe5vwIY1BiHOMzSgCYdD67uVXcbLp1zvEOZfuNzKHXoxxDX07H6k1Eu6MHUHr8goWgcr0tL5a4JsQ7lOrfVg69HuUwLvlB/i6fUz4M94KNAaW/bg/45/l0/+9dEQgTJsQ7lCrzauXQa1FiprhI2I03wIUKLRmUXd4rjL6Ekki51Wd7uAyjLQxBipGIudhsZ5/UNEr3E6C1KNuPqroPjiSBcpZoiDAsoUJLGmUP+sbubqWjUbZeR44ul2TdiDJfuL8Y3RBPFPrnYB85E9Isyt6DK5y6olEecF4ZlNi4TvHHFjN4xBNPo4T4hR7H0VdQtlJX4BxzMyPEDxJiZgTd8g38NYO/Xm170CzKGlEoH/+o0keepIsSvdY1tg3+ijvuNYkcbNQb4XQJM6H7FZSs/nG+8saIJXuQ4M9sZF6hfK/6mLWUBEoIKstQa4hPrXtNRLmZzFC7wWWCGGJuSdDpUaJ/PlfxR8dsr5JXKDVxkQiFEpyeRDUBI/7Y8Qvcqee8nIJlJ8Y8QAnPZlquWUJmLcv/9RVldHa029PHjixtB7yAUjflzK8iiFmSX0BJre6qt5XEKoLMsZXon2sZDHDSE8uEeIvSXgbCo+zaqSx4ilupExtwKNM1uxzoK8HIvDt09FznwaYd9wfDgX3b6J9roxVNiGXdG/ZgH13VeLCG3o8dlejmVA4ozlq5OXUO5aWbBavUZFx5VIrADT76MNYT07w3Hlc6IGriyr3eL1SHcF6shXLmpncgvEgXdtcqlLkSjA1mdhN16mwPlVVeULV6le3Z67yKLckpLgclPLSGZXzBN6wdWqplWsvNfhn7dIMr655cB0nTqVG+4Mv4XtMCPTtzOYRnKD/av9plFvaYUQnTP59DS2vpCltq+zKI8km9T3G9JTVjVOnUKNVKl0QTueLXM5TFQCznRtwlWi5KtTwr1VqqlnHbfr1CWY5WeBPnCb/N5OQo+6zXbZsQv1BCuq5iRabvTJR1a65tRA5KHJbMTDXoxCj5AGpfgW5CvEL54KztoSa6DJSzupXktkPjoFQPgpME03RilNOa9pmJDa9QVivu1HaR20PLtLp83mTfVLNzXZS4UI9bbbfXaVFO1nB1O5OAUyu6CfETZbUohEj6GChxUDppE3R8zNDSRRndYIRHJN/VGSdFCf55vrQTCffQFD1z7CdKbdGdm/TRUe4wvLDTJgOc4dsYt0ig3OKJczZLcFKUuFYluXdK4K50E+IpympHnrvbVkcJPUXMguBmIHP3AIEyusde/fd0ehMoYXlWi9gEgXnfpMqM+Iqyfa787LrtP72c4zChQksKpUrG59ywbBDl4cQdBJXUNkPMHGgmxFeUGjDnCwUVSpU4J7oEN2AZoSWFMkKrw+57bxDlwU156JXZcyB74SLKfFkeQZTpiKjUWYH2kyi1iIQdlTj9Q+axu65fQKOMnnBFMzNEGkR5cKtsB80EtRYQ37DVbatpzNStM3Fe0D+Lskz6PHIoZ7jZw3UK9vtdoV16aEmjxP5KmWHZJEpCxnsEfbIpddEX28grlISeToySS/pUx+/r1iBiUu5Vs4E0SszinmB1+iGUOC1AWz+cMammhDxG+atcSWmuiS1R9nBlIv3tgRf0ArTQkkYZDTF9R25APSVKtdCEWWuND7KaqPUZpZb0IUcl7s7nvggCNlAPVBiUuAqaefqPQNnQJ5j6UG32TF91l8F3ipQJwU8wUSJsJdxBStZMofziJ5hslNpOIMq3XUBTf9MPbbSC4nU1G4mfYHIaNoROScn16Zf4YQ36IoUa+jDaDL90xkynjp/h62EbNCHqw2iUnC5SHxYjazZQ3t0WshyWouiMKHqEY24IiSffXmt59RKlajvTwduO3RMTpmG9RdEp9DfVBnWNDlNNfK6Q/F6hf58rDE3yEdFgJCiDkaAMRoIyGAnKYCQog5GgDEaCMhgJymAkKIORoAxGgjIYCcpgJCiDkaAMRoIyGAnKYCQog5GgDEaCMhgJymAkKIORoAxGgjIYCcpgJCiDkaAMRoIyGPXO3f9TpBkJyqZ1d/ZDOvw1b5FI9H/Wf1wUJzsbagNaAAAAAElFTkSuQmCC"
              alt="logo"
            />
            <input
              class="form-control search_input ms-5 mt-3"
              type="search"
              placeholder="     Search for products,or Health Goals"
              aria-label="Search"
            />
            <i class="bi bi-search search_icon"></i>

            <a class="loyalti" href="#">Loyalty Rewards </a>

            <div class="dropdown">
              <button class="dropbtn">
                Customer Support
                <i class="bi bi-chevron-down" id="down"></i>
                <i class="bi bi-chevron-up" id="up"></i>
              </button>
              <div class="dropdown-content">
                <div id="contact_divs" class="d-flex">
                  <div id="right_contact">
                    <h6 class="mt-2 ms-3 f-13">Contact us</h6>
                    <a class="f-13" href="#">
                      <i class="bi bi-chat-right-text me-1"></i>
                      Chat with us</a
                    >
                    <a class="f-13" href="#">
                      <i class="bi bi-envelope me-1"></i>
                      Email us</a
                    >
                    <a class="f-13" href="#">
                      <i class="bi bi-chat-right-dots me-1"></i>
                      Ask our Experts</a
                    >
                  </div>
                  <div id="left_links">
                    <h6 class="mt-2 ms-3 f-13">Helpful Links</h6>
                    <a class="f-13" href="#"> Track your order</a>
                    <a class="f-13" href="#"> Retruns policy</a>
                    <a class="f-13" href="#"> FAQs</a>
                  </div>
                </div>
                <div id="support_num">
                  <p class="mt-3 mb-0 f-13 ms-3">
                    For Support & Order Enquiries
                  </p>
                  <h6 class="mt-1 mb-1 ms-3">Call us at : 0124-4616444</h6>
                  <p class="mt-1 mb-1 f-13 ms-3">10AM to 7PM</p>
                </div>
              </div>
            </div>

            <div class="dropdown" style="width: 200px">
              <button class="dropbtn">
                <i class="bi bi-person"></i>
                My Account & Orders
                <i class="bi bi-chevron-down" id="down"></i>
                <i class="bi bi-chevron-up" id="up2"></i>
              </button>

              <div class="dropdown-content" style="height: 250px; width: 350px">

                <button class="login" >Login</button>
                
                <button class="signup">New user?/Sign up</button>

                <div class="account_health d-flex">
                  <div id="account_info">
                    <h6 class="f-13 ms-3 color_blue">My account</h6>

                    <a class="f-13" href="#">
                      <i class="bi bi-box-seam me-1"></i>
                      Orders</a
                    >
                    <a class="f-13" href="#">
                      <i class="bi bi-heart me-1"></i>
                      Wishlist</a
                    >
                    <a class="f-13" href="#">
                      <i class="bi bi-gem me-1"></i>
                      Loyalty Rewards</a
                    >
                  </div>

                  <div id="health_profile">
                    <h6 class="f-13 ms-3 color_blue">Health profile</h6>

                    <a class="f-13" href="#"> Diet Plan</a>
                    <a class="f-13" href="#"> My Consultations</a>
                    <a class="f-13" href="#"> Recommended Products</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart dropdown">
              <i class="bi bi-cart3 fs-4"></i>
            </div>
          </form>
        </div>
      </nav>
    

    <div id="down_nav">
      <div class="dropdown" id="category">
        <button class="dropbtn" id="drop_category">Category</button>

        <div
          class="dropdown-content"
          id="content_dropdown"
          style="height: 350px; width: 850px"
        >
          <div class="account_health d-flex">
            <div class="category_content d-flex">
              <div class="protine f-13">
                <p class="color_blue ms-5 mt-4">Protine</p>
                <p class="ms-5 mb-2">Whey Proteins</p>
                <p class="ms-5 mb-2">Beginners Whey Protein</p>
                <p class="ms-5 mb-2">Raw Whey Proteins</p>
                <p class="ms-5 mb-2">Whey Protein Isolate</p>
                <p class="ms-5 mb-2">Plant Proteins</p>
                <p class="ms-5 mb-2">Protein for Women</p>
                <p class="ms-5 mb-2">Protein Blends</p>
                <p class="ms-5 mb-2">Casein Proteins</p>
                <p class="ms-5 mb-2">Soy Proteins</p>
              </div>

              <div class="protine f-13">
                <p class="color_blue mt-4">Gainers</p>
                <p class="mb-2">Weight Gainers</p>
                <p class="mb-2">Mass Gainers</p>
                <p class="mb-2">Herbal Weight Gainers</p>
              </div>

              <div class="protine f-13">
                <p class="color_blue mt-4 f-13">Protein Foods</p>
                <p class="mb-2">Protein Bars</p>
                <p class="mb-2">Protein Cookies</p>
                <p class="mb-2">Peanut Butter</p>
                <p class="mb-2">Protein Shakes</p>
              </div>

              <div class="protine f-13">
                <p class="color_blue ms-5 me-2 mt-4 f-13">Pre/Post Workout</p>
                <p class="ms-5 me-2 mb-2">Pre-Workout</p>
                <p class="ms-5 me-2 mb-2">Creatine</p>
                <p class="ms-5 me-2 mb-2">BCAAs</p>
                <p class="ms-5 me-2 mb-2">Carb Blends</p>
                <p class="ms-5 me-2 mb-2">Electrolytes</p>
                <p class="ms-5 me-2 mb-2">Nitrix Oxide</p>
                <p class="ms-5 me-2 mb-2">Other Supports</p>
                <p class="ms-5 me-2 mb-2">Citrulline Malate</p>
              </div>

              <div class="protine f-13">
                <p class="color_blue ms-4 mt-4 f-13">Workout Essentials</p>
                <p class="ms-4 mb-2">Fat Burners</p>
                <p class="ms-4 mb-2">Consult Swrvices</p>
                <p class="ms-4 mb-2">L Carnitine</p>
                <p class="ms-4 mb-2">Multivitamins for Bodybuilding</p>

                <p class="ms-4 mb-2">Pre Hormone</p>
                <p class="ms-4 mb-2">ZMA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown" id="Brand">
        <button class="dropbtn" id="drop_category">Brand</button>

        <div class="dropdown-content" style="height: 450px; width: 850px">
          <div class="ms-5 mt-4"><h5>Shop by Brands</h5></div>
          <div class="account_health d-flex">
            <div class="category_content d-flex">
              <div class="protine f-13">
                <p class="color_blue ms-5 mt-2">Sports Nutrition</p>
                <p class="ms-5 mb-2">Muscleblaze</p>
                <p class="ms-5 mb-2">MB Fuel One</p>
                <p class="ms-5 mb-2">bGREEN</p>
                <p class="ms-5 mb-2">Optimum Nutrition</p>
                <p class="ms-5 mb-2">Ultimate Nutrition</p>
                <p class="ms-5 mb-2">MuscleTech</p>
                <p class="ms-5 mb-2">MyProtein</p>
                <p class="ms-5 mb-2">Isopure</p>
                <p class="ms-5 mb-2">Dymatize</p>
                <p class="ms-5 mb-2">GNC</p>
                <p class="ms-5 mb-2">Labrada</p>
                <p class="ms-5 mb-2">MusclePharm</p>
              </div>

              <div class="protine f-13">
                <p class="color_blue mt-2">Vitamins & Supplements</p>
                <p class="mb-2">Healthkart</p>
                <p class="mb-2">TrueBasics</p>
                <p class="mb-2">GNC</p>
                <p class="mb-2">NOW</p>
                <p class="mb-2">Healthvit</p>
                <p class="mb-2">INLIFE</p>
                <p class="mb-2">Natures Velvet</p>
                <p class="mb-2">Swisse</p>
                <p class="mb-2">NutraFirst</p>
              </div>

              <div class="protine f-13">
                <p class="color_blue mt-2 f-13">Health Food And Drinks</p>
                <p class="mb-2">Nouriza</p>
                <p class="mb-2">MuscleBlaze</p>
                <p class="mb-2">HealthKart</p>
                <p class="mb-2">HealthViva</p>
                <p class="mb-2">True Elements</p>
                <p class="mb-2">Incredio</p>
                <p class="mb-2">Gritzo</p>
                <p class="mb-2">Yoga Bar</p>
                <p class="mb-2">Amway</p>
                <p class="mb-2">Alpino</p>
              </div>

              <div class="protine f-13">
                <p class="color_blue ms-5 me-2 mt-2 f-13">Fitness</p>
                <p class="ms-5 me-2 mb-2">Strauss</p>
                <p class="ms-5 me-2 mb-2">SportSoul</p>
                <p class="ms-5 me-2 mb-2">Greenbee</p>
                <p class="ms-5 me-2 mb-2">Hustle Fitness</p>
                <p class="ms-5 me-2 mb-2">Biofit</p>
                <p class="ms-5 me-2 mb-2">Gym Brute</p>
                <p class="ms-5 me-2 mb-2">Omtex</p>
                <p class="ms-5 me-2 mb-2">B Fit USA</p>
                <p class="ms-5 me-2 mb-2">GHC</p>
              </div>

              <div class="protine f-13">
                <p class="color_blue ms-4 mt-2 f-13">Wellness</p>
                <p class="ms-4 mb-2">Ustraa</p>
                <p class="ms-4 mb-2">NutraFirst</p>
                <p class="ms-4 mb-2">Oriental Botanics</p>
                <p class="ms-4 mb-2">Amway</p>
                <p class="ms-4 mb-2">St.Botanica</p>
                <p class="ms-4 mb-2">Himalayan Organics</p>
                <p class="ms-4 mb-2">Organic Harvest</p>
                <p class="ms-4 mb-2">Man Arden</p>
                <p class="ms-4 mb-2">INLIFE</p>
                <p class="ms-4 mb-2">Hi9</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown" id="Brand">
        <button class="dropbtn" id="drop_category">Gender</button>

        <div class="dropdown-content" style="height: 200px; width: 300px">
          <div class="mt-3 ms-4"><h5>Shop by Gender</h5></div>
          <div class="account_health d-flex">
            <div class="gender d-flex">
              <div id="men">
                <i class="bi bi-gender-male men_icon ms-4"></i>
              </div>

              <div id="women">
                <i class="bi bi-gender-female men_icon ms-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown" id="Brand">
        <button class="dropbtn" id="drop_category">Goal</button>
      </div>

      <div class="dropdown" id="Brand">
        <button class="dropbtn" id="drop_category">bestsellers</button>

        <div class="dropdown-content" style="height: 450px; width: 100px">
          <div class="mt-3 ms-4 f-13">
            <p>Protein Powder Casein Protein</p>
            <p>Whey Protein</p>
            <p>Whey Protein Isolate</p>
            <p>Mass Gainer</p>
            <p>BCAA</p>
            <p>Fat Burners</p>
            <p>Pre Workout</p>
            <p>Creatine</p>
            <p>Protein Bars</p>
            <p>Weight Gainer</p>
            <p>Carb Blends</p>
            <p>Other Support</p>
          </div>
        </div>
      </div>

      <div class="dropdown" id="Brand">
        <button class="dropbtn" id="drop_category">Deals</button>
      </div>

      <div class="dropdown" id="Brand">
        <button class="dropbtn" id="drop_category">Gift Card</button>
      </div>

      <div class="dropdown" >
        <button class="dropbtn" id="drop_category">Blog,Video & More</button>
      </div>

      <div class="dropdown" id="Hk_consult">
        <button class="dropbtn" id="hk" ><i class="bi bi-chat-right-quote me-2 ms-0 mt-5"></i>HK Consult</button>

        <div class="dropdown-content" id="cosult_button">
          <div class="consult_service mt-4 ms-4"><h6>Consult Services</h6></div>
          <div class="mt-1 ms-4 f-13">
            <p>Health Profile</p>
            <p>Book a Consultation</p>
            <p>Recommended a Product</p>
            <p>Service Programs</p>
            <p>Workout ar home</p>
           
           
          </div>
        </div>
      </div>


      <div class="dropdown" id="Hk_consult">
        <button class="dropbtn" id="find" ><i class="bi bi-geo-alt me-2 ms-0 mt-5"></i>Find a Store</button>

        
      </div>
      
    </div>
    `;
}
export default navbar;