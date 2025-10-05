import {meetingInstance} from "./axiosInstance.js";

// Book meeting hall
export const bookMeetingHall = (data) => meetingInstance.post("/book-meeting-hall", data);

// Get dashboard meeting hall data
export const getDashboardMeetingHall = () => meetingInstance.get("/get-dashboard-meeting-hall");

// Get user's meetings
export const getMyMeetings = () => meetingInstance.get("/get-my-meetings");

// Get meetings by hall ID
export const getMeetingsByHallId = (hallId) => meetingInstance.get(`/get-meetings?hallId=${hallId}`);

// Update booking by booking ID
export const updateBooking = (bookingId, data) =>
  meetingInstance.put(`/update-book-meeting-hall?bookingId=${bookingId}`, data);

// Cancel booking by booking ID
export const cancelBooking = (bookingId) =>
  meetingInstance.delete(`/cancel-booking?bookingId=${bookingId}`);