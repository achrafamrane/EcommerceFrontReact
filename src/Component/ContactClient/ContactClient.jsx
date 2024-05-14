import { CardContact, FormulaireInfClient } from "../index";
export default function ContactClient() {
  return (
    <CardContact title="Information de client" description="description">
      <div className="grid grid-cols-1  ">
        <FormulaireInfClient />
      </div>
    </CardContact>
  );
}
