import { useAppContext } from "@/context/appContext";

const FillerMask2 = () => {
    const {setIsHoveredOnSmall} = useAppContext();
  return (
    <div className={`h-[100vh] bg-black pl-36`}>
    </div>
  );
};

export default FillerMask2;
