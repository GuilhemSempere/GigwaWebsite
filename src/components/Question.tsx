import { Disclosure } from '@headlessui/react'
import { LucideChevronUp } from 'lucide-react'

interface QuestionProps {
    question: string;
    answer: string;
}

export default function Question({ question, answer }: QuestionProps) {
  return (
    <Disclosure>
        {({ open }) => (
        <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-light-secondary1 px-12 py-6 text-left text-sm font-medium text-white hover:bg-light-secondary2 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
            <span>{ question }</span>
            <LucideChevronUp
                className={`${
                open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-white`}
            />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-light-primary">
            { answer }
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
  )
}