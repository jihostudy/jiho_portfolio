import { useState } from 'react'

import Readme from '@components/common/Readme'
import { ProjectDetailType } from '@public/data/project/deatils'

import useScrollLock from './useScrollLock'

const useReadmeModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState<ProjectDetailType | undefined>()

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

  interface ModalProps {
    onConfirm?: () => void
  }
  /**
   * Actual Modal Component to Use
   */
  const Modal = ({ onConfirm }: ModalProps) => {
    return <Readme isOpen={isOpen} data={modalData} handleClose={handleClose} onConfirm={onConfirm} />
  }
  return {
    isOpen,
    handleOpen,
    Modal,
  }
}

export default useReadmeModal
