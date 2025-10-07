import { ContactItem } from "@/types/profileTypes";

const ContactInfo = ({ contacts }: { contacts: ContactItem[] }) => {
  return (
    <section className="flex flex-col w-full max-w-140 h-fit items-end p-4 gap-2">
      <div className="flex flex-col xl:text-lg w-full xl:w-3/5 h-fit gap-4 mt-6">
        {contacts &&
          contacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <span className="font-pre-bold whitespace-nowrap">{contact.label}: </span>
              <a href={contact.link} className="text-content font-pre-semi-bold whitespace-nowrap">
                {contact.value}
              </a>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ContactInfo;
