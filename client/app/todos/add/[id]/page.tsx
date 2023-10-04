import { useSearchParams } from "next/navigation";
import { ModalHome } from "../../../../components/modal/modalHome";

const Idpage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>{params.id}</h1>
      <ModalHome open={true} text={params.id} />
    </div>
  );
};

export default Idpage;
