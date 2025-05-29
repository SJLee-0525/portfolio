import { AwardItem } from "@/types/profileTypes";

const ProfileAwards = ({ awards }: { awards: AwardItem[] }) => {
  return (
    <section className="flex flex-col w-full h-fit p-4 gap-2">
      <h1 className="text-3xl text-start font-pre-bold">Awards</h1>

      <div className="flex flex-col w-full h-full gap-4 mt-6">
        <table>
          <tbody className="flex flex-col w-full h-full gap-4">
            {awards &&
              awards.map((award, index) => (
                <tr key={index} className="flex items-center justify-between w-full h-full">
                  <td className="text-text font-pre-semi-bold w-3/5 text-start">{award.title}</td>
                  <td className="text-content font-pre-semi-bold w-1/5 text-center">{award.where}</td>
                  <td className="text-content font-pre-semi-bold w-1/5 text-end">{award.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProfileAwards;
