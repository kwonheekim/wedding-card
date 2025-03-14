import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import FullScreenMessage from "@shared/FullScreenMessage";
import Heading from "./components/sections/Heading";
import Video from "./components/sections/Video";
import { Wedding } from "@models/wedding";
import ImageGallery from "./components/sections/ImageGallery";
import Intro from "./components/sections/intro";
import Invitation from "./components/sections/Invitation";
import Calendar from "./components/sections/Calendar";
import Map from "./components/sections/Map";
import Contact from "./components/sections/Contact";
import Share from "./components/sections/Share";
import Modal from "./components/shared/Modal";
import AttendCountModal from "./components/AttendCountModal";

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8888/wedding")
      .then((response) => {
        if (response.ok === false) {
          throw new Error("청첩장 정보를 불러오지 못했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((error) => {
        console.log("에러발생", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // aaa

  if (loading) {
    return <FullScreenMessage type="loading" />;
  }

  if (error) {
    return <FullScreenMessage type="error" />;
  }

  if (wedding === null) {
    return null;
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding;

  return (
    <div className={cx("container")}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
      <AttendCountModal wedding={wedding} />
    </div>
  );
}

export default App;
