import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaRegCalendarAlt, FaChevronRight } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import dayjs from "dayjs";
import bdayImg from "../assests/images/birthday-cake.png";

const mockevent = {
  name: "Birthday Bash",
  hostedBy: "Elysia",
  startDate: dayjs(),
  endDate: dayjs(),
  venue: "Suburb, State, Postcode",
};

const Event = () => {
  const location = useLocation();
  const params = useParams();
  const eventInfo = {
    ...mockevent,
    ...location.state,
    name: location.state.name || mockevent.name, 
    startDate: location.state.startDate || mockevent.startDate,
    endDate: location.state.endDate || mockevent.endDate,
  };

  const renderListItem = (title, subTitle, Icon) => (
    <li role="button" className="flex items-center w-full mb-4">
      <Link
        to={`/event/${params.id}/edit`}
        state={eventInfo}
        className="flex items-center justify-between flex-1"
      >
        <button className="btn rounded-xl shadow-lg text-purple-2 text-2xl p-4">
          <Icon />
        </button>
        <span className="flex-1 ml-2">
          <h5 className="text-purple mb-1 font-bold">{title}</h5>
          <h5 className="text-gray-1">{subTitle}</h5>
        </span>
      </Link>
      <FaChevronRight className="text-gray-3" />
    </li>
  );

  return (
    <div className="md:p-24 xl:p-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 order-1 md:order-2">
          <img
            src={bdayImg}
            alt=""
            className="max-h-96 w-full object-cover md:object-contain md:push-col-6"
          />
        </div>

        <div className="col-span-12 md:col-span-6 order-2 md:order-1">
          <div className="p-4">
            <h1 className="text-purple text-4xl leading-tight font-bold mb-1">
              {eventInfo.name}
            </h1>
            <h5 className="text-gray-2 mb-8">Hosted by Elysia</h5>
            <ul>
              {renderListItem(
                dayjs(eventInfo.startDate).format("DD MMMM hh:mm a"),
                <>
                  to{" "}
                  <span className="font-bold">
                    {dayjs(eventInfo.endDate).format("DD MMMM hh:mm a")}
                  </span>{" "}
                  UTC+10
                </>,
                FaRegCalendarAlt
              )}
              {renderListItem(
                eventInfo.venue,
                "Suburb, State, Postcode",
                MdOutlineLocationOn
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
