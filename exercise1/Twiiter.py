# choose=0
# while(int(choose)!=3):
#    choose=input("please choose 1 or 2 and if you want to exit choose 3")
#    print(choose)
#
#    height=input("enter height of the tower")
#    width=input("enter width of the tower")
import math

def rectangular_tower():
    height = int(input("Enter the height of the tower: "))
    width = int(input("Enter the width of the tower: "))
    while height<2:
        height = int(input("The height is not valid , Enter again: "))
    if abs(height - width) > 5 or height==width:
        area = height * width
        print("The area of the rectangular tower is:", area)
    else:
        scope = 2 * (height + width)
        print("The scope of the rectangular tower is:", scope)

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

           x=int((width-2)/2)
           y=(height-2)%x
           space=x+1
           print((space*" ")+"*")
           space=space-1
           for i in range(int(y)):
               print((space*" ")+"***")
           for i in range(3, width-1,2):
               for j in range(1,int((height-2)/x)+1):
                  print((space*" ")+i*"*")
               space=space-1

           print(width*"*")

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
