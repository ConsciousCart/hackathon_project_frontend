import React, { useState, useEffect } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from '@/components/ui/checkbox'

interface SelectedCategories {
  diabetic: boolean;
  healthGoals: boolean;
  normal: boolean;
}

const FirstTimeUserDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedCategories, setSelectedCategories] = useState<SelectedCategories>({
    diabetic: false,
    healthGoals: false,
    normal: false
  })

  useEffect(() => {
    const hasSelectedCategory = localStorage.getItem('healthCategory')
    if (!hasSelectedCategory) {
      setIsOpen(true)
    }
  }, [])

  const handleSelection = (category: keyof SelectedCategories) => {
    setSelectedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  

  const handleSubmit = () => {
    if (Object.values(selectedCategories).some(Boolean)) {
      localStorage.setItem('healthCategory', JSON.stringify(selectedCategories))
      setIsOpen(false)
    } else {
      alert("Please select at least one category")
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>How healthy are you?</AlertDialogTitle>
          <AlertDialogDescription>
            Please select the category or categories that best describe you:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          {(Object.keys(selectedCategories) as Array<keyof SelectedCategories>).map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={category} 
                checked={selectedCategories[category]} 
                onCheckedChange={() => handleSelection(category)} 
              />
              <Label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</Label>
            </div>
          ))}
          
        </div>
        <Button onClick={handleSubmit} className="mt-4 w-full">
          Continue
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default FirstTimeUserDialog