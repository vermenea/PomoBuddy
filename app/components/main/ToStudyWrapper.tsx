import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import ToStudy from './ToStudy';

export default async function ToStudyWrapper() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email;

  let initialToStudies: any[] = [];

  if (userId) {
    const userCollection = collection(db, 'users', userId, 'toStudies');
    const querySnapshot = await getDocs(userCollection);
    initialToStudies = querySnapshot.docs.map((doc) => doc.data());
  }

  return <ToStudy initialToStudies={initialToStudies} />;
}
