import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Link from "next/link";

export default function Landingpage() {
  return (
    <div>
      <Head>
        <title>Online Accounting Software-GST India | Zoho Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <nav class="navbar sticky-top" style={{ background: "white" }}>
        <a class="navbar-brand" href="#">
          <Image
            src="/logo.png"
            alt=""
            width={180}
            height={60}
            class="d-inline-block align-text-top"
          ></Image>
        </a>
        <ul class="nav justify-content-end">
          <Image
            src="/india.png"
            alt=""
            width={30}
            height={20}
            srcset=""
          ></Image>
          <p>Toll Free - 18005726671</p>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Features
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Resources
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/*  */}

      <section className={styles.bannerss}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>
          Online GST accounting software, <br /> built for your business.
        </h1>
        <p>
          Zoho Books is online accounting software that manages your finances,
          keeps you GST <br />
          compliant, automates business workflows, and helps you work
          collectively across <br />
          departments.
        </p>
        <br />

        <Link href="/signin">
          <button>ACCESS ZOHO BOOKS</button>
        </Link>
        <button className={styles.btn}>EXPLORE DEMO ACCOUNT</button>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Image src="/videos.png" height={800} width={1050} alt="" srcset="" />
        <br />
        <br />
        <br />
        <Image src="/winner.png" height={140} width={600} alt="" srcset="" />
        <br />
        <p style={{ fontWeight: "500px", fontSize: "23px" }}>
          Recognised by the Government of India as the Best App in the Business
          category.
        </p>
      </section>

      {/*  */}

      <section className={styles.sectionss}>
        <h2>
          Why Zoho Books is the preferred accounting software of businesses
        </h2>
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "18rem", padding: "20px" }}>
                <Image
                  src="/picture1.svg"
                  width={180}
                  height={60}
                  alt=""
                  srcset=""
                />
                <div class="card-body">
                  <h3 style={{ marginTop: "30px" }} class="card-title">
                    End-to-end accounting
                  </h3>
                  <p style={{ marginTop: "20px" }} class="card-text">
                    Right from negotiating deals to raising sales orders and
                    invoicing, Zoho Books handles mundane accounting tasks so
                    you can focus on your business.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="card"
                style={{ width: "18rem", padding: "20px", height: "400px" }}
              >
                <Image
                  src="/picture2.svg"
                  width={180}
                  height={60}
                  alt=""
                  srcset=""
                />
                <div class="card-body">
                  <h3 style={{ marginTop: "30px" }} class="card-title">
                    GST compliance
                  </h3>
                  <p class="card-text" style={{ marginTop: "20px" }}>
                    Create GST invoices, know your tax liability, and file your
                    tax returns directly. Zoho Books keeps your business GST
                    compliant.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="card"
                style={{ width: "18rem", padding: "20px", height: "400px" }}
              >
                <Image
                  src="/picture3.svg"
                  width={180}
                  height={60}
                  alt=""
                  srcset=""
                />
                <div class="card-body">
                  <h3 style={{ marginTop: "30px" }} class="card-title">
                    Integrated platform
                  </h3>
                  <p style={{ marginTop: "20px" }} class="card-text">
                    As your business grows, add more of Zoho's 40+ apps to help
                    you manage and run every aspect of your business from
                    wherever you are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section
        className={styles.sectionss}
        class="animate__animated animate__fadeInRight"
      >
        <br />
        <br />
        <br />
        <br />
        <div className={styles.posterss}>
          <div style={{ marginTop: "50px", marginLeft: "-20px" }}>
            <Image
              src="/picture4.svg"
              width={200}
              height={150}
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h5>E-Invoicing</h5>
            <br />
            <p>
              Use Zoho Books to connect with the IRP and get your <br />
              e-invoices validated.
            </p>
          </div>
          <div>
            <button>LEARN MORE</button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-record"
          viewBox="0 0 16 16"
        >
          <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-record"
          viewBox="0 0 16 16"
        >
          <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
        </svg>
      </section>

      {/*  */}

      <section className={styles.sectionss}>
        <div>
          <h1>Features at a glance</h1>
        </div>
        <div>
          <ul className={styles.listss}>
            <li>Receivables</li>|<li>Payables</li>|<li>Inventory</li>|
            <li>Banking</li>|<li>Timesheet</li>|<li>Contacts</li>|
            <li>Reports</li>
          </ul>
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col animate__animated animate__fadeInLeft">
            <img
              src="https://www.zoho.com/in/books/images/accounting_software_contact_management_feature_1x.webp"
              alt=""
              srcset=""
            />
          </div>
          <div
            class="col animate__animated animate__fadeInRight"
            style={{
              fontWeight: "400",
              justifyContent: "left",
              textAlign: "left",
              marginTop: "40px",
            }}
          >
            <h5>
              Keep the money coming in with Zoho Books.
              <br /> Send estimates, convert to GST invoices, and get
              <br /> paid online, on time.
            </h5>
            <p style={{ marginTop: "40px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              Create retail invoices in seconds
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              Chase payments easily with payment reminders
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              Give your customers online payment options and
              <br /> get paid faster
            </p>
            <h5 style={{ color: "blue", cursor: "pointer" }}>
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </h5>
          </div>
        </div>
      </section>

      {/*  */}

      <section className={styles.sectionss}>
        <h1>Here's how Zoho Books keeps your business GST compliant</h1>
        <br />
        <br />
        <div className="container">
          <div class="row">
            <div class="col">
              <div
                class="card mb-3"
                style={{ border: "none", width: "550px", textAlign: "left" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <Image
                      src="/picture5.svg"
                      width={150}
                      height={200}
                      class="img-fluid rounded-start"
                      alt="..."
                    ></Image>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">
                        GST treatment for items and contacts
                      </h5>
                      <p class="card-text">
                        Zoho Books lets you associate HSN/SAC codes with your
                        goods and services and record the GSTINs for contacts at
                        the time of creation. The next time you generate a
                        transaction, the corresponding information is
                        auto-populated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="card mb-3"
                style={{ border: "none", width: "550px", textAlign: "left" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <Image
                      src="/picture6.svg"
                      width={150}
                      height={200}
                      class="img-fluid rounded-start"
                      alt="..."
                    ></Image>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">GST in transactions</h5>
                      <p class="card-text">
                        Get a grip on your taxes with Zoho Books. From place of
                        supply to GST levied on goods and services, display all
                        relevant details in your bills and invoices so your
                        transactions meet the Government mandates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div
                class="card mb-3"
                style={{ border: "none", width: "550px", textAlign: "left" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <Image
                      src="/picture7.svg"
                      width={150}
                      height={200}
                      class="img-fluid rounded-start"
                      alt="..."
                    ></Image>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">e-Way bills for consignments</h5>
                      <p class="card-text">
                        Create e-Way bills from within your accounting software.
                        Zoho Books automatically detects transactions that
                        require e-Way bills and helps you capture the e-Way bill
                        information in your invoices and transport copies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="card mb-3"
                style={{ border: "none", width: "550px", textAlign: "left" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <Image
                      src="/picture8.svg"
                      width={150}
                      height={200}
                      class="img-fluid rounded-start"
                      alt="..."
                    ></Image>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">On-time returns filing</h5>
                      <p class="card-text">
                        File your GST returns directly from Zoho Books. Your
                        accounting software will automatically calculate your
                        GST liability and enable you to push transactions to the
                        GST portal and file returns directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h5 style={{ color: "blue", cursor: "pointer" }}>
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </h5>
        </div>
      </section>

      {/*  */}

      <section className={styles.sectionss}>
        <br />
        <br />
        <br />
        <div
          style={{
            background: "#d1e8fd",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>Zoho Books caters to different kinds of businesses</h1>
          </div>
          <div style={{ marginTop: "35px" }}>
            <div className={styles.contentss}>
              <div className={styles.subcontentss}>
                <Image
                  src="/picture9.svg"
                  width={50}
                  height={50}
                  alt=""
                  srcset=""
                />
                <h5>
                  Accounting software for
                  <br />
                  <strong>Small business</strong>
                </h5>
                <div className={styles.iconss}>
                  <Image
                    id="pic"
                    src="/picture10.svg"
                    width={10}
                    height={20}
                  ></Image>
                </div>
              </div>
              <div
                className={styles.subcontentss}
                style={{ marginLeft: "25px" }}
              >
                <Image
                  src="/picture11.svg"
                  width={50}
                  height={50}
                  alt=""
                  srcset=""
                />
                <h5>
                  Accounting software for
                  <br />
                  <strong>Mid-Market businesses</strong>
                </h5>
                <div className={styles.iconss}>
                  <Image
                    id="pic"
                    src="/picture10.svg"
                    width={10}
                    height={20}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section className={styles.sectionpircess}>
        <br />
        <h1>Simple and affordable pricing</h1>
        <br />
        <div class="row">
          <div
            class="card"
            style={{
              width: "16rem",
              justifyItems: "center",
              alignItems: "center",
              height: "18rem",
            }}
          >
            <div class="card-body">
              <p
                class="card-text"
                style={{ letterSpacing: "4px", marginTop: "25px" }}
              >
                FREE
              </p>
              <Image src="/picture12.svg" width={100} height={130}></Image>
              <br />
              <button className={styles.pricebtnss}>START NOW</button>
            </div>
          </div>

          <div
            class="card"
            style={{
              width: "16rem",
              justifyItems: "center",
              alignItems: "center",
              height: "18rem",
            }}
          >
            <div class="card-body">
              <p
                class="card-text"
                style={{ letterSpacing: "4px", marginTop: "25px" }}
              >
                STANDARD
              </p>
              <h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-currency-dollar"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                </svg>
                749
              </h1>
              <br />
              <p>
                /month billed annually <br />
                ₹899 billed monthly
              </p>
              <button className={styles.pricebtnss}>START NOW</button>
            </div>
          </div>

          <div
            class="card"
            style={{
              width: "16rem",
              justifyItems: "center",
              alignItems: "center",
              height: "18rem",
            }}
          >
            <div class="card-body">
              <p
                class="card-text"
                style={{ letterSpacing: "4px", marginTop: "25px" }}
              >
                PROFESSIONAL
              </p>
              <h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-currency-dollar"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                </svg>
                1,499
              </h1>
              <br />
              <p>
                /month billed annually <br />
                ₹1,799 billed monthly
              </p>
              <button className={styles.pricebtnss}>START NOW</button>
            </div>
          </div>

          <div
            class="card"
            style={{
              width: "16rem",
              justifyItems: "center",
              alignItems: "center",
              height: "18rem",
            }}
          >
            <div class="card-body">
              <p
                class="card-text"
                style={{ letterSpacing: "4px", marginTop: "25px" }}
              >
                PREMIUM
              </p>
              <h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-currency-dollar"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                </svg>
                2,999
              </h1>
              <br />
              <p>
                /month billed annually <br />
                ₹3,599 billed monthly
              </p>
              <button className={styles.pricebtnss}>START NOW</button>
            </div>
          </div>
          <div
            class="card"
            style={{
              width: "16rem",
              justifyItems: "center",
              alignItems: "center",
              height: "18rem",
            }}
          >
            <div class="card-body">
              <p
                class="card-text"
                style={{ letterSpacing: "4px", marginTop: "25px" }}
              >
                ELITE
              </p>
              <h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-currency-dollar"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                </svg>
                4,999
              </h1>
              <br />
              <p>
                /month billed annually <br />
                ₹5,999 billed monthly
              </p>
              <button className={styles.pricebtnss}>START NOW</button>
            </div>
          </div>

          <h5 style={{ color: "blue", cursor: "pointer", marginTop: "50px" }}>
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </h5>
        </div>
      </section>

      {/*  */}

      <section className={styles.sectionss}>
        <br />
        <br />
        <h1>Powering thousands of businesses</h1>
        <br />
        <br />
        <div class="row">
          <div class="col">
            <Image src="/person.png" width={400} height={400}></Image>
            <div class="row">
              <h3>HARESH GAUSWAMI</h3>
              <h6>OCTFIS TECHNO LLP, Surat, India</h6>
              <br />
              <br />
              <h6>
                Based out of Surat, the textile and diamond hub of India, <br />
                Octfis Techno LLP decided to help other businesses in
                <br /> the area with their accounting and GST filing. That is{" "}
                <br />
                when they came across Zoho Books. Watch how the
                <br /> clean interface, cloud access, advanced features, and{" "}
                <br />
                banking capabilities of Zoho Books made them a fan.
              </h6>
            </div>
          </div>
          <div
            class="col"
            style={{ background: "#2babeb", color: "white", maxWidth: "700px" }}
          >
            <h5 style={{ marginTop: "50px", fontFamily: "cursive" }}>
              I always wanted an online accounting <br />
              software which is user friendly and I could
              <br /> use it from anywhere I want to. Zoho Books <br />
              allows me to view my invoices, see how my
              <br /> inventory looks like and also add items and <br />
              contacts from wherever I am. Everything
              <br /> right now looks perfect.
            </h5>
            <br />
            <div>_____</div>
            <br />
            <h3>DR. BALAKRISHNA ALVA</h3>
            <br />
            <h5 style={{ fontFamily: "cursive" }}>DIRECTOR, PATTRA, India</h5>
            <br />

            <Image src="/person1.png" width={300} height={250}></Image>
          </div>
          <br />
          <br />
          <h5 style={{ color: "blue", cursor: "pointer", marginTop: "90px" }}>
            Visit our wall of love
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </h5>
        </div>
      </section>

      {/*  */}

      <section className={styles.sectionss}>
        <div class="row">
          <div class="col">
            <Image src="/mobile_1x.webp" width={1000} height={1000}></Image>
          </div>
          <div class="col">
            <h1 style={{ marginTop: "210px" }}>Accounting on the go</h1>
            <br />
            <h5 style={{ marginLeft: "40px" }}>
              Indian users can now manage their <br />
              finances from wherever they are through
              <br /> the Zoho Books app for iOS and Android.
            </h5>
            <br />
            <div>
              <Image src="/appstore.png" width={150} height={50}></Image>
              <Image src="/playstore.png" width={150} height={50}></Image>
            </div>
            <br />
            <h5 style={{ color: "blue", cursor: "pointer", marginTop: "50px" }}>
              Check out our mobile apps
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </h5>
          </div>
        </div>
      </section>

      {/*  */}

      <section className={styles.sectionss}>
        <h1>Switch to smart accounting software. Switch to Zoho Books.</h1>
        <br />
        <br />
        <Link href="/login">
          <button className={styles.zohobtn}>ACCESS ZOHO BOOKS</button>
        </Link>
        <button className={styles.demobtnss}>EXPLORE DEMO ACCOUNT</button>
      </section>

      <section className={styles.sectionss}>
        <Image src="/zoho-logo.png" width={160} height={45}></Image>
        <br />
        <br />
        <h1 style={{ color: "#053b4f" }}>Made in India. Made for the world.</h1>
        <br />
        <br />
        <br />
      </section>
    </div>
  );
}
