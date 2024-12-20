import Card from "./card";

export default function ListCard() {
  return (
    <div className="grid grid-cols-4 container mx-auto py-4 gap-2">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
