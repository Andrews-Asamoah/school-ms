import { Card, CardContent } from "@/components/ui/card";
import { Music } from "lucide-react";

export default function Anthem() {
  const verses = [
    [
      "We build our school on Thee oh Lord",
      "To Thee we bring our common need,",
      "The loving heart, the helpful word,",
      "The tender thought, the kindly deed.",
      "And so we pray, Thy spirit may",
      "Be present in our school always.",
    ],
    [
      "We change but Thou art still the same",
      "The same good master, teacher, friend",
      "We change but Lord we bear Thy name",
      "To journey with it to the end",
      "And so we pray, Thy spirit may",
      "Be present in our school always.",
    ],
  ];

  return (
    <div className="py-12 bg-purple-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Music className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold">School Anthem</h2>
          </div>
          <Card className="bg-white/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              {verses.map((verse, verseIndex) => (
                <div
                  key={verseIndex}
                  className={verseIndex !== 0 ? "mt-8" : ""}
                >
                  <div className="text-lg text-gray-700 space-y-2">
                    {verse.map((line, lineIndex) => (
                      <p key={lineIndex} className="italic font-serif">
                        {line}
                      </p>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Verse {verseIndex + 1}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
