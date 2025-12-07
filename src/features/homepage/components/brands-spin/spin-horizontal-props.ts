export default interface SpinProps {
    duration?: number
    getData?: () => Promise<{ src: string; alt: string }[]>
    imageSize?: { width: number; height: number }
    backgroundColor?: string
    speed?: number
    duplicate?: boolean
    duplicateCount?: number
    gap?: number
}
