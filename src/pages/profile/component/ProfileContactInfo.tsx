import { ContactItem } from "@/types/profileTypes";

const ContactInfo = ({ contacts }: { contacts: ContactItem[] }) => {
  return (
    <section className="flex flex-col w-5/6 xl:w-3/4 h-fit items-start p-4 gap-2">
      <h1 className="text-4xl font-pre-bold">Contact</h1>

      <div className="flex flex-col text-lg w-full xl:w-3/5 h-fit gap-4 mt-6">
        {contacts &&
          contacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <span className="font-pre-bold">{contact.label}: </span>
              <a href={contact.link} className="text-content font-pre-semi-bold">
                {contact.value}
              </a>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ContactInfo;
