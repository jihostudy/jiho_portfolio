import { useEffect } from 'react'

/**
 * Hook to close a modal when the 'Escape' key is pressed
 * @param isOpen - A boolean indicating whether the modal is open
 * @param onClose - A callback function to close the modal
 */
const useEscClose = (isOpen: boolean, onClose: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])
}

export default useEscClose
