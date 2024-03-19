'use client';
import { useRouter, useParams, useSearchParams } from "next/navigation";

const ProperyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams();
  const name = searchParams.get('name');

  return (
    <div>
      <button onClick={() => router.push('/')} className="bg-blue-500 p-2">Go Home {name}</button>
    </div>
  )
}

export default ProperyPage