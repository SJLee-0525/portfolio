import { EducationItem } from "@/types/profileTypes";

const ProfileEducation = ({ educations }: { educations: EducationItem[] }) => {
  return (
    <section className="flex flex-col w-full h-fit p-4 gap-2">
      <h1 className="text-3xl lg:text-4xl text-start font-pre-bold">Education</h1>

      <div className="flex flex-col w-full h-full gap-4 mt-6">
        <table>
          <tbody className="flex flex-col w-full h-full gap-4 lg:text-lg">
            {educations &&
              educations.map((education, index) => (
                <tr key={index} className="flex items-center justify-between w-full h-full">
                  <td className="text-text font-pre-semi-bold w-2/3 lg:w-2/5 text-start">{education.school}</td>
                  <td className="text-content font-pre-semi-bold w-1/3 lg:w-1/5 text-end lg:text-center">
                    {education.major}
                  </td>
                  <td className="hidden lg:table-cell text-content font-pre-semi-bold w-2/5 text-end">
                    {education.period}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProfileEducation;
