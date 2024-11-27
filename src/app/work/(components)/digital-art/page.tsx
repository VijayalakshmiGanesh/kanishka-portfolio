import Image from "next/image";

const gallerlyList = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1jERD51LWV6-vZPjhqWCZtd9cm219wJsB/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1jERD51LWV6-vZPjhqWCZtd9cm219wJsB",
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/1jB_rGKGfvH2yhPv_aSTXAC8Bsft1Scpl/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1jB_rGKGfvH2yhPv_aSTXAC8Bsft1Scpl",
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1j5gki3xfJO9SWyeqwvTr2iuwJT7rc5Rl/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1j5gki3xfJO9SWyeqwvTr2iuwJT7rc5Rl",
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1irc5-u5liylkrffPDsiEdEVMxtfuPM0W/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1irc5-u5liylkrffPDsiEdEVMxtfuPM0W",
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1immvfGc4EMHZGBTO57ru9ig3nVZnIftn/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1immvfGc4EMHZGBTO57ru9ig3nVZnIftn",
  },
  {
    id: 6,
    link: "https://drive.google.com/file/d/1j2KRyI7n6cw2BUeL6M-Mx5lYJc6Esyf7/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1j2KRyI7n6cw2BUeL6M-Mx5lYJc6Esyf7",
  },
  {
    id: 7,
    link: "https://drive.google.com/file/d/1jDL4LpI1xFw02r0JEtJaPIStqxDFyHZD/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1jDL4LpI1xFw02r0JEtJaPIStqxDFyHZD",
  },
  {
    id: 8,
    link: "https://drive.google.com/file/d/1iru8lzuSRF_QZPmZ61FkeNgVayvpBC0a/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iru8lzuSRF_QZPmZ61FkeNgVayvpBC0a",
  },
  {
    id: 9,
    link: "https://drive.google.com/file/d/1iwRRPGTdE1mNvehanJ5suioxTR8_YQr7/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iwRRPGTdE1mNvehanJ5suioxTR8_YQr7",
  },
  {
    id: 10,
    link: "https://drive.google.com/file/d/1iuSrD7z3ZksnZSJfa4HVcr6lbwTWqxyb/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1iuSrD7z3ZksnZSJfa4HVcr6lbwTWqxyb",
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
