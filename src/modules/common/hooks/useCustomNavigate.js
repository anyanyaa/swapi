import { useNavigate } from "react-router";

export const useCustomNavigate = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const moveForward = () => navigate(+1);

  const navigateToPage = (navigateTo = "/") => navigate(navigateTo);

  return { goBack, moveForward, navigateToPage };
};
