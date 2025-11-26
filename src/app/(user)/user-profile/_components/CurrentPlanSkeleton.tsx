import { Skeleton } from "@/components/ui/skeleton";

export default function CurrentPlanSkeleton({length}:{length?:number}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: length || 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl h-64 p-6 flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(90,72,41,0.8) 0%, rgba(140,123,75,0.6) 100%)",
          }}
        >
          {/* Title */}
          <Skeleton className="h-5 w-28 mb-6" />

          {/* Price */}
          <Skeleton className="h-10 w-20 mb-8" />

          {/* Button */}
          <Skeleton className="h-9 w-24 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
