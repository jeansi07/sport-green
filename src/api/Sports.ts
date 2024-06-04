import axios from "axios";

export interface Sport {
  idSport: string;
  strSport: string;
  strFormat: string;
  strSportThumb: string;
  strSportIconGreen: string;
  strSportDescription?: string;
}

export interface SportResponse {
  sports: Sport[];
}

export const getSport = async () => {
  const response = await axios.get<SportResponse>(
    "https://apimocha.com/playgreen/sports"
  );
  if (response && response.status === 200) {
    return response.data;
  }
  throw new Error("Error");
};
