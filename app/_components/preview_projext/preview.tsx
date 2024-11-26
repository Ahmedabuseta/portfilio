"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IProject } from "../projects/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player/lazy";
import { ToolsComp } from "@/components/tools";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
// import video from '@/public/videos/Lms.mp4'
interface IProps {
  isOpen: boolean;
  setIsOpen: Function;
  previewProject?: IProject | undefined;
}
export default function PreviewModel({
  isOpen,
  setIsOpen,
  previewProject,
}: IProps) {
  function closeModal() {
    setIsOpen(false);
    console.log(previewProject?.title);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10  sm:max-w  w-full "
          onClose={closeModal}
        >
          <div
            className="fixed inset-0 backdrop-blur-sm bg-white/1 "
            aria-hidden="true"
          />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/5" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto top-5 ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  max-w-3xl transform overflow-hidden rounded-2xl bg-gray-800 text-white  p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <div className=" aspect-video w-full rounded-lg mb-3 overflow-hidden ">
                      <ReactPlayer
                        className="react-player rounded-md "
                        controls
                        volume={0}
                        muted={true}
                        url="https://sharedby.blomp.com/qDJoHj"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <Dialog.Title
                      as="h3"
                      className="text-3xl pb-3 uppercase text-indigo-300 z-20 font-medium leading-6 ext-white"
                    >
                      {previewProject?.title}...
                    </Dialog.Title>
                    <ToolsComp tools={previewProject?.tools} />
                    <div>
                      <a
                        href={previewProject?.liveLink}
                        className="text-white "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 ms-2 mb-2 hover:-translate-y-1">
                          live{" "}
                        </Button>
                      </a>

                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 ms-2 mb-2 hover:-translate-y-1">
                        <a
                          href={previewProject?.repoLink}
                          className="text-white "
                          target="_blank"
                          rel="noreferrer"
                        >
                          repo
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Ok, close!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
