import "./App.css";
import { Input, Progress, Checkbox } from "antd";

function App() {
  return (
    <div className="App container">
      <header className="App-header p-4">
        <div className="d-flex align-items-center justify-content-between">
          <i class="bi bi-chevron-left system-default-icon"></i>
          <div>Bookings</div>
          <i class="bi bi-bell system-default-icon primary-color"></i>
        </div>
      </header>

      <div className="my-4">
        <Input
          size="large"
          placeholder="Search Anything"
          prefix={
            <i class="bi bi-search system-default-icon mx-3 color-muted"></i>
          }
          className="customized-input"
        />
      </div>

      <div className="customized-card d-flex align-items-center justify-content-between my-4">
        <div className="colored-text">
          <span>
            <i class="bi bi-calendar-event"></i>
          </span>
          <span className="ms-3">10/04/2000</span>
        </div>
        <div>
          <i class="bi bi-arrow-right system-default-icon"></i>
        </div>
        <div className="colored-text">
          <span>
            <i class="bi bi-calendar-event"></i>
          </span>
          <span className="ms-3">10/04/2000</span>
          <span>
            <i class="bi bi-sliders system-default-icon mx-2 color-muted"></i>
          </span>
        </div>
      </div>

      <div className="my-4">
        <div
          class="btn-group d-flex align-items-center justify-content-between"
          role="group"
          aria-label="Basic example"
        >
          <div className="">
            <button type="button" class="btn btn-outline group-btn">
              All
            </button>
          </div>
          <div className="">
            <button type="button" class="btn btn-outline group-btn">
              Upcoming
            </button>
          </div>
          <div className="">
            <button type="button" class="btn btn-outline group-btn">
              Check-in
            </button>
          </div>
        </div>
      </div>

      <div className="customized-card my-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="">
            <img
              src="https://source.unsplash.com/random/?dog"
              alt="IMG"
              className="profile-img"
            />
            <span className="ms-3">Monk & Sagar</span>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between my-4">
          <div className="colored-text">
            <span>
              <i class="bi bi-calendar-event"></i>
            </span>
            <span className="ms-3">10/04/2000</span>
          </div>
          <div>
            <i class="bi bi-arrow-right system-default-icon"></i>
          </div>
          <div className="colored-text">
            <span>
              <i class="bi bi-calendar-event"></i>
            </span>
            <span className="ms-3">10/04/2000</span>
          </div>
        </div>

        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-10 col-md-9 col-sm-8 col-7">
            <Progress percent={50} />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-5 text-end">
            <span className="color-muted">13</span>/28 Tasks
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between my-4">
          <Checkbox className="check-in-cb">Check-In</Checkbox>
          <Checkbox className="check-out-cb">Check-Out</Checkbox>
        </div>
      </div>
    </div>
  );
}

export default App;
