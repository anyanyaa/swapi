import { useNavigate } from "react-router";

export const useCustomNavigate = (navigateTo = "/") => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const moveForward = () => navigate(+1);
  const navigateToPage = () => navigate(navigateTo);

  return { goBack, moveForward, navigateToPage };
};
