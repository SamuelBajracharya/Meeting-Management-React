import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  bookMeetingHall,
  cancelBooking,
  getDashboardMeetingHall,
  getMeetingsByHallId,
  getMyMeetings, updateBooking
} from "../api/meetingsAPI.js";


// Dashboard data
export const useDashboardMeetingHall = () => {
  return useQuery({
    queryKey: ["dashboardMeetingHall"],
    queryFn: getDashboardMeetingHall,
    staleTime: 1000 * 60 * 5,
  });
};

// My meetings
export const useMyMeetings = () => {
  return useQuery({
    queryKey: ["myMeetings"],
    queryFn: getMyMeetings,
    staleTime: 1000 * 60 * 5,
  });
};

// Meetings by hall ID
export const useMeetingsByHallId = (hallId) => {
  return useQuery({
    queryKey: ["meetingsByHallId", hallId],
    queryFn: () => getMeetingsByHallId(hallId),
    enabled: !!hallId,
  });
};

// Book meeting hall
export const useBookMeetingHall = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: bookMeetingHall,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboardMeetingHall"] });
      queryClient.invalidateQueries({ queryKey: ["myMeetings"] });
    },
  });
};

// Update booking
export const useUpdateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bookingId, data }) => updateBooking(bookingId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboardMeetingHall"] });
      queryClient.invalidateQueries({ queryKey: ["myMeetings"] });
    },
  });
};

// Cancel booking
export const useCancelBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookingId) => cancelBooking(bookingId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboardMeetingHall"] });
      queryClient.invalidateQueries({ queryKey: ["myMeetings"] });
    },
  });
};
