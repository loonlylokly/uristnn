"use client"
import { usePopUp } from "@/store";

const BtnOpenPopUp = ({
  children,
  myClassName,
  type,
}: {
  children: React.ReactNode
  myClassName: string
  type: 'btnPrimary' | 'btnSecondary'
}) => {
  const togglePopUp = usePopUp((state) => state.togglePopUp);

  return (
    <button className={`${myClassName} ${type} btn`} onClick={togglePopUp}>{children}</button>
  );
}

export default BtnOpenPopUp;