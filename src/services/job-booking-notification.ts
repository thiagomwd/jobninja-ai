import { JobInterface } from "@/entities/job-interface"

interface Notification {
  job: JobInterface;
  to: string;
}

export const sendJobBookingNotification = async (notification: Notification) => {
  console.log(notification);
}