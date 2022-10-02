import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import dayjs from "dayjs";
import bdayImg from "../assests/images/birthday-cake.png";
import Input from "../components/Input";

const mockId = Date.now();

const initialState = {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    venue: "",
}

const CreateEvent = () => {
  const navigator = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [eventInfo, setEventInfo] = useState(params.id ? {
    ...location.state,
    startDate: location.state.startDate ? dayjs(location.state.startDate).format('yyyy-MM-dd') : '',
    endDate: location.state.endDate ? dayjs(location.state.endDate).format('yyyy-MM-dd') : '',
} : initialState);

  const handleEventCreate = (e) => {
    e.preventDefault();
    navigator(`/event/${mockId}`, { state: eventInfo });
  };

  const handleChange = (key, value) => {
    const newState = {
      ...eventInfo,
      [key]: value,
    };
    setEventInfo(newState);
  };

  return (
    <div className="py-8 px-12 min-h-screen">
      <nav className="flex items-center">
        <Link to="/" className="flex items-center">
          <BsChevronLeft className="mr-1" />
          Back
        </Link>
      </nav>
      <div className="mt-8">
        <main>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <h1 className="text-purple text-5xl leading-tight font-bold mb-12">
                Create event
              </h1>
              <form onSubmit={handleEventCreate}>
                <Input
                  label="Event name"
                  value={eventInfo.name}
                  onChange={handleChange}
                  name="name"
                />
                <Input
                  label="Description"
                  value={eventInfo.description}
                  onChange={handleChange}
                  name="description"
                />
                <Input
                  label="Start date"
                  type="date"
                  value={eventInfo.startDate}
                  onChange={handleChange}
                  name="startDate"
                />
                <Input
                  label="End date"
                  type="date"
                  value={eventInfo.endDate}
                  onChange={handleChange}
                  name="endDate"
                />
                <Input
                  label="Venue"
                  value={eventInfo.venue}
                  onChange={handleChange}
                  name="venue"
                />
                <div className="mt-12">
                  <button
                    className="btn btn-primary text-white md:px-16 w-full md:w-auto"
                    type="submit"
                  >
                    🎉 Create my event
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden md:flex col-span-6 h-full items-center justify-center">
              <img src={bdayImg} alt="Bithday cake" className="max-h-96" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateEvent;
