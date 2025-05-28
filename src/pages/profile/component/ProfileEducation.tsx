import { EducationItem } from "@/types/profileTypes";

const ProfileEducation = ({ educations }: { educations: EducationItem[] }) => {
  return (
    <section className="flex flex-col w-5/6 lg:w-3/4 h-fit p-4 gap-2">
      <h1 className="text-3xl text-start font-pre-bold">Education</h1>

      <div className="flex flex-col w-full h-full gap-4 mt-6">
        <table>
          <tbody className="flex flex-col w-full h-full gap-4">
            {educations &&
              educations.map((education, index) => (
                <tr key={index} className="flex items-center justify-between w-full h-full">
                  <td className="text-text font-pre-semi-bold w-2/5 text-start">{education.school}</td>
                  <td className="text-content font-pre-semi-bold w-1/5 text-center">{education.major}</td>
                  <td className="text-content font-pre-semi-bold w-2/5 text-end">{education.period}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProfileEducation;
