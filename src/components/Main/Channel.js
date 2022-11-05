import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HashtagIcon } from "@heroicons/react/24/solid";
import { setChannelInfo } from "features/channelSlice";

function Channel({ id, channelName }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
    navigate("/");
  };

  return (
    <NavLink
      to={id}
      className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white"
      style={({ isActive }) =>
        isActive
          ? {
              color: "white",
              backgroundColor: "#42464D",
            }
          : undefined
      }
      onClick={setChannel}
    >
      <HashtagIcon className="h-5 mr-2" /> {channelName}
    </NavLink>
  );
}

export default Channel;
