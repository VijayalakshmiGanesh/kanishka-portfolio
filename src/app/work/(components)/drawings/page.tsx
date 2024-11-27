import Image from "next/image";

const gallerlyList = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1iNYlQi5HMBLBWr5X-CyhCD96eaRJ2sJP/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iNYlQi5HMBLBWr5X-CyhCD96eaRJ2sJP",
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/1iO-6YNxEdz54CqJoGeb6IN3zbDtPmYFx/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iO-6YNxEdz54CqJoGeb6IN3zbDtPmYFx",
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1iRQh5y2W6hLfkZiKJpG1yJgwh-J0IgJN/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iRQh5y2W6hLfkZiKJpG1yJgwh-J0IgJN",
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1iSDgiLjhSZqPNx7hwjH2Sn5Iefqp5LtE/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iSDgiLjhSZqPNx7hwjH2Sn5Iefqp5LtE",
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1iSfCGxms6cfwLZNcQDACY44cj34WWdNT/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iSfCGxms6cfwLZNcQDACY44cj34WWdNT",
  },
  {
    id: 6,
    link: "https://drive.google.com/file/d/1iTASsuRJOs-w5dO9rGflYDO2fE52cDnf/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iTASsuRJOs-w5dO9rGflYDO2fE52cDnf",
  },
  {
    id: 7,
    link: "https://drive.google.com/file/d/1iUl6_LLeRX2ctMKm2C7UIHlpNeeA_Q1O/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iUl6_LLeRX2ctMKm2C7UIHlpNeeA_Q1O",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 lg:gap-6 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3 py-10">
        {gallerlyList.map(({ fileId, id }) => (
          <div key={id}>
            <Image
              className="h-80 w-full max-w-full rounded-lg object-cover object-center"
              src={fileId}
              alt={`gallery-photo-${id}`}
              width={320}
              height={320}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
