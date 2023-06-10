"use client";
import { useI18nContext } from "@/i18n/i18n-react";

const Message = () => {
  const { LL } = useI18nContext();
  return <div>The message should appear here: {LL.WELCOME()}</div>;
};

export default Message;
