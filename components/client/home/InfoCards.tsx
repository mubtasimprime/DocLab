import { ClipboardPlus, Clock, Headset } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const schedule = [
  { day: "Sun - Wed", time: "8:00 - 17:00" },
  { day: "Thu - Fri", time: "9:00 - 17:00" },
  { day: "Sat - sun", time: "10:00 - 17:00" },
];

const InfoCards = () => {
  return (
    <div className="relative z-20 -mt-24 px-4">
      <div className="mx-auto grid max-w-285 grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          icon={<ClipboardPlus className="h-6 w-6" />}
          label="24 Hours Service"
          title="Online Appoinment"
          description="Get ALl time support for emergency. We have introduced the principle of family medicine."
          footer={<Button href="#">Make a Appoinment</Button>}
        />

        <Card
          icon={<Clock className="h-6 w-6" />}
          iconShape="rounded-full"
          label="Timing schedule"
          title="Working Hours"
          description={
            <ul className="space-y-2">
              {schedule.map((row) => (
                <li key={row.day} className="flex items-center justify-between">
                  <span>{row.day} :</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          }
        />

        <Card
          icon={<Headset className="h-6 w-6" />}
          iconShape="rounded-full"
          label="Emegency Cases"
          title="1-800-700-6200"
          description="Get ALl time support for emergency. We have introduced the principle of family medicine. Get Conneted with us for any urgency."
        />
      </div>
    </div>
  );
};

export default InfoCards;
