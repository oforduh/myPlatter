import { notifications } from "@mantine/notifications";
import { IconCheck, IconBell, IconX } from "@tabler/icons-react";

const BRAND_PRIMARY = "#eb5757";
const LIGHT_PRIMARY = "#F3F1FD";
const BRAND_BG = "#fdf8f0";
const ERROR_COLOR = "#D72638";
const INFO_COLOR = "#2E13B3"; // same as primary

const success = (title?: string, msg?: string, autoCloseTime?: number) => {
  notifications.show({
    title: title,
    message: msg,
    icon: <IconCheck size="0.8rem" color={BRAND_PRIMARY} />,
    color: BRAND_PRIMARY,
    autoClose: autoCloseTime || 5000,
    styles: () => ({
      root: {
        backgroundColor: LIGHT_PRIMARY,
        border: `1px solid ${BRAND_PRIMARY}`,
        minWidth: "300px",
        borderRadius: "6px",
      },
      title: { fontSize: "13px", fontWeight: 700, color: BRAND_PRIMARY },
      description: { color: BRAND_PRIMARY, fontSize: "11px" },
      closeButton: {
        color: BRAND_PRIMARY,
        "&:hover": { backgroundColor: "transparent" },
      },
    }),
  });
};

const error = (title?: string, msg?: string) => {
  notifications.show({
    title: title,
    message: msg,
    icon: <IconX size="0.8rem" color={ERROR_COLOR} />,
    color: ERROR_COLOR,
    autoClose: 3000,
    styles: () => ({
      root: {
        backgroundColor: "#FFF0F0",
        border: `1px solid ${ERROR_COLOR}`,
        minWidth: "300px",
        borderRadius: "6px",
      },
      title: { fontSize: "13px", fontWeight: 700, color: ERROR_COLOR },
      description: { color: ERROR_COLOR, fontSize: "11px" },
      closeButton: {
        color: ERROR_COLOR,
        "&:hover": { backgroundColor: "transparent" },
      },
    }),
  });
};

const handleInfo = (title: string, msg: string) => {
  notifications.show({
    title: title,
    message: msg,
    icon: <IconBell size="0.8rem" color={BRAND_PRIMARY} />,
    color: BRAND_PRIMARY,
    autoClose: false,
    styles: () => ({
      root: {
        backgroundColor: BRAND_BG,
        border: `1px solid ${BRAND_PRIMARY}`,
        minWidth: "300px",
        borderRadius: "6px",
      },
      title: { fontSize: "13px", fontWeight: 700, color: BRAND_PRIMARY },
      description: { color: BRAND_PRIMARY, fontSize: "11px" },
      closeButton: {
        color: BRAND_PRIMARY,
        "&:hover": { backgroundColor: "transparent" },
      },
    }),
  });
};

const notificationComponent = {
  success,
  error,
  handleInfo,
};

export default notificationComponent;
