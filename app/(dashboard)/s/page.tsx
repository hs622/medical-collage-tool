import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function Page() {

  return (
    <div className="pt-5">
      <div className="md:max-w-[80%] m-auto grid grid-cols-3 gap-4">
        <div className="col-span-2 w-full">
          <div className="flex flex-col">
            
            <div className="border rounded-xl py-6 px-4">
              <div>
                <div className="text-2xl font-bold">Hello, [Student Name]</div>
                <div className=""></div>
              </div>
              
              <div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Short Descriptio */}
        <div className="col-span-1">
          <div className="flex flex-col gap-4 md:max-w-xs">
            {/* Announcement card */}
            <div className="border rounded-lg px-4 py-6">
              <div className="text-md pb-4" >Announcements</div>

              <div className="flex flex-col gap-2">
                <div aria-label="announcement-body" className="">
                  <div aria-label="accouncement-title" className="text-xs font-bold">Lorem, ipsum.</div>
                  <div aria-label="accouncement-description" className="text-xs">Lorem ipsum dolor sit amet consectetur elit...</div>
                </div>
                <div aria-label="announcement-body" className="">
                  <div aria-label="accouncement-title" className="text-xs font-bold">Lorem, ipsum.</div>
                  <div aria-label="accouncement-description" className="text-xs">Lorem ipsum dolor sit amet consectetur elit...</div>
                </div>
                <div aria-label="announcement-body" className="">
                  <div aria-label="accouncement-title" className="text-xs font-bold">Lorem, ipsum.</div>
                  <div aria-label="accouncement-description" className="text-xs">Lorem ipsum dolor sit amet consectetur elit...</div>
                </div>
                <div aria-label="announcement-body" className="">
                  <div aria-label="accouncement-title" className="text-xs font-bold">Lorem, ipsum.</div>
                  <div aria-label="accouncement-description" className="text-xs">Lorem ipsum dolor sit amet consectetur elit...</div>
                </div>
                <div aria-label="announcement-body" className="">
                  <div aria-label="accouncement-title" className="text-xs font-bold">Lorem, ipsum.</div>
                  <div aria-label="accouncement-description" className="text-xs">Lorem ipsum dolor sit amet consectetur elit...</div>
                </div>
                <div aria-label="announcement-body" className="">
                  <div aria-label="accouncement-title" className="text-xs font-bold">Lorem, ipsum.</div>
                  <div aria-label="accouncement-description" className="text-xs">Lorem ipsum dolor sit amet consectetur elit...</div>
                </div>
              </div>

              {/* footers */}
              <div className="float-end pt-4">
                <Link href={"#"} className="flex text-xs items-center">
                  see more
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="border rounded-lg px-4 py-6">
              <div className="text-md pb-4" >Weekly Schedule</div>

              <div className="flex flex-col gap-2">
                <div aria-label="announcement-body" className="">
                  <div aria-label="accouncement-title" className="text-xs font-bold">[Module Name]</div>
                  <div aria-label="accouncement-description" className="text-xs">[Session description]</div>
                </div>
                <div aria-label="announcement-body" className="">
                  <div aria-label="accouncement-title" className="text-xs font-bold">[Module Name]</div>
                  <div aria-label="accouncement-description" className="text-xs">[Session description]</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}