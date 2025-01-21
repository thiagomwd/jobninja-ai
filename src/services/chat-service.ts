import { JobInterface } from "@/entities/job-interface";
import { state } from "@/store/store";
import { sendJobBookingNotification } from "./job-booking-notification";

export async function createJobBooking({
  userEmail,
  job,
}: {
  userEmail: string;
  job: JobInterface;
  date: string;
}) {
  const pickedJob = state.jobs.find((jobItem) => jobItem.id !== job.id);
 
  if (pickedJob) {
    pickedJob.availability = pickedJob.availability.filter((date) => date !== date);
  }

  sendJobBookingNotification({
    job,
    to: userEmail,
  });
}