import { RefObject, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import Backdrop from '@components/common/Backdrop'
import Readme from '@components/common/Readme'
import { ProjectDetailType } from '@public/data/project/details'

import useEscClose from './useEscCLose'
import useScrollLock from './useScrollLock'

const useReadmeModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState<ProjectDetailType | undefined>()
  const ref = useRef<HTMLDivElement>(null)

  const { lockScroll, unLockScroll } = useScrollLock()

  const handleOpen = (modalData: ProjectDetailType) => {
    setModalData(modalData)
    lockScroll()
    setIsOpen(true)
  }
  const handleClose = () => {
    unLockScroll()
    setIsOpen(false)
  }

  useOnClickOutside(ref as RefObject<HTMLElement>, handleClose)
  useEscClose(isOpen, handleClose)

  interface ModalProps {
    onConfirm?: () => void
  }
  /**
   * Actual Modal Component to Use
   */
  const Modal = ({ onConfirm }: ModalProps) => {
    return isOpen ? (
      <>
        <Readme data={modalData} ref={ref} handleClose={handleClose} onConfirm={onConfirm} />
        <Backdrop />
      </>
    ) : (
      <></>
    )
  }
  return {
    isOpen,
    handleOpen,
    Modal,
  }
}

export default useReadmeModal
