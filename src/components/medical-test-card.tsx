import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, FlaskRoundIcon as Flask, User, FileText, Activity } from "lucide-react"

interface MedicalTestCardProps {
  patientName: string
  testType: string
  testDate: string
  resultValue: string
  referenceRange: string
  status: "normal" | "abnormal" | "critical" | "pending"
}

export default function MedicalTestCard({
  patientName = "Jane Doe",
  testType = "Complete Blood Count",
  testDate = "May 10, 2025",
  resultValue = "14.2 g/dL",
  referenceRange = "12.0 - 15.5 g/dL",
  status = "normal",
}: MedicalTestCardProps) {
  // Status badge color mapping
  const statusConfig = {
    normal: {
      color: "bg-green-100 text-green-800 hover:bg-green-100",
      label: "Normal",
    },
    abnormal: {
      color: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Abnormal",
    },
    critical: {
      color: "bg-red-100 text-red-800 hover:bg-red-100",
      label: "Critical",
    },
    pending: {
      color: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Pending",
    },
  }

  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader className="bg-slate-50 pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-slate-500" />
            <h3 className="font-medium">{patientName}</h3>
          </div>
          <Badge variant="outline" className={`${statusConfig[status].color} border-0`}>
            {statusConfig[status].label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Flask className="h-4 w-4 text-slate-500" />
              <div>
                <p className="text-sm text-slate-500">Test Type</p>
                <p className="font-medium">{testType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-slate-500" />
              <div>
                <p className="text-sm text-slate-500">Test Date</p>
                <p className="font-medium">{testDate}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-slate-500" />
              <div>
                <p className="text-sm text-slate-500">Result Value</p>
                <p className="font-medium">{resultValue}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-500" />
              <div>
                <p className="text-sm text-slate-500">Reference Range</p>
                <p className="font-medium">{referenceRange}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
