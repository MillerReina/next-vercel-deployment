import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

const style : CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",    
};

export const ActiveLink = ({ text, route }: any) => {
  const router = useRouter();  

  return (
    <Link href={route} style={router.asPath === route ? style : undefined}>
      {text}
    </Link>
  );
};
