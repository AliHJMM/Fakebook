import type { User } from "@/types/chat"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserItemProps {
  user: User
  onClick: () => void
  isSelected: boolean
}

export function UserItem({ user, onClick, isSelected }: UserItemProps) {
  if (!user || !user.name) return null  // ✅ Prevents crashes if user is missing

  return (
    <div
      className={`flex items-center p-4 cursor-pointer transition-all duration-200 ${
        isSelected ? "bg-[#6C5CE7] bg-opacity-10" : "hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <Avatar className="h-12 w-12 mr-4">
        <AvatarImage src={user.avatar} />
        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <p className={`text-sm font-semibold ${isSelected ? "text-[#6C5CE7]" : "text-gray-900"}`}>{user.name}</p>
        <p className="text-xs text-gray-500 truncate">{user.online ? "Online" : "Offline"}</p>
      </div>
      <div className="flex flex-col items-end">
        <div className={`w-3 h-3 rounded-full ${user.online ? "bg-green-500" : "bg-gray-300"}`} />
      </div>
    </div>
  )
}
