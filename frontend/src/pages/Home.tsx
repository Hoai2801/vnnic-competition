import React, { useEffect, useState } from "react";
import Transition from "../components/common/Transition";
import CategoryPost from "../components/ui/blog/CategoryPost";
import GroupPostsByCategory from "../components/ui/blog/GroupPostsByCategory";
import LatestBlog from "../components/ui/blog/LatestBlog";

export default function Home() {
  const [latestArticles, setLatestArticles] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [events, setEvents] = useState([]);
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/blog/latest')
      .then((response) => response.json())
      .then((data) => {
        setLatestArticles(data)
      })

    fetch('http://localhost:8080/blog/category/3')
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data)
      })

    fetch('http://localhost:8080/blog/category/2')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data)
      })

    fetch('http://localhost:8080/blog/category/4')
      .then((response) => response.json())
      .then((data) => {
        setActivity(data)
      })
  }, [])
  return (
    <Transition>
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
        <div className="container px-4 py-2">
          <GroupPostsByCategory header="Tin mới" posts={latestArticles} />
          <CategoryPost header="Thông báo" posts={notifications}  />
        </div>
        <div className="container px-4 py-2">
          <GroupPostsByCategory  header="Hoạt động Đoàn" posts={activity} />
          <CategoryPost header="Sự kiện" posts={events} />
        </div>
      </div>
    </Transition>
  );
}
