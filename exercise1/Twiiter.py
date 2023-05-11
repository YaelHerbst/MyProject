
import math
"""This is the function of the rectangular tower"""
def rectangular_tower():
    height = int(input("Enter the height of the tower: "))
    width = int(input("Enter the width of the tower: "))
    while height<2:
        height = int(input("The height is not valid , Enter again: "))
    if abs(height - width) > 5 or height==width:
        area = height * width
        print("The area of the rectangular tower is:", area)
    else:
        perimeter = 2 * (height + width)
        print("The scope of the rectangular tower is:", perimeter)

"""This is the function of the triple tower"""
def triangular_tower():
    height = int(input("Enter the height of the tower: "))
    width = int(input("Enter the width of the tower: "))
    print("1. Calculating the perimeter")
    print("2. The Triangle Tower print")
    choice = int(input("Enter your choice: "))
    if choice == 1:
        perimeter = width + 2 * math.sqrt(height ** 2 + (width // 2) ** 2)
        print("The perimeter of the triangle is:", perimeter)
    elif choice==2:
        if width % 2 == 0 or width > 2 * height:
           print("The triangle cannot be printed.")
        else:

           group=int((width-2)/2)
           remainder=(height-2)%group
           space=group+1
           print(" "*space+"*")
           space-=1
           for i in range(int(remainder)):
               print(" "*space+"***")
           for i in range(3, width-1,2):
               for j in range(1,group):
                  print(space*" "+i*"*")
               space-=1
           print(width*"*")
    else:
        exit()

while True:
    print("1. Rectangular tower")
    print("2. Triangular tower")
    print("3. Exit program")
    choice = int(input("Enter your choice: "))
    if choice == 1:
        rectangular_tower()
    elif choice == 2:
        triangular_tower()
    elif choice == 3:
        break
    else:
        print("Invalid choice, please try again.")
