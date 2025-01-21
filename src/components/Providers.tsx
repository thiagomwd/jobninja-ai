"use client"

import { HeroUIProvider } from "@heroui/react";
import { PropsWithChildren } from "react"

export const Providers = ({children}: PropsWithChildren) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}