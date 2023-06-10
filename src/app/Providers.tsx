"use client";

import TypesafeI18n from "@/i18n/i18n-react";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <TypesafeI18n locale="en">{children}</TypesafeI18n>;
};

export default Providers;
