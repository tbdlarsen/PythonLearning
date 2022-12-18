def bubblesort (data):
    n = len(data) 
    for i in range(n):
        
        skift = False

        for j in range((n-1)-i):

            # ser om det nuværende stykke data er mindre end det næste. 
            if data[j] > data[j+1]:

                #sætter nuværende data ind i en temporary variable 
                temp = data[j]

                # gør så at det tal forand i rækken bliver sat ned på den nuværende plads
                data[j] = data[j+1]

                #gør så at det tidligere nuværende tal kommer en plads foran i rækken
                data[j+1]= temp
                skift = True

        if skift == False:
            break

        
               
data = [-1, 2, 5, 6, 8, 10, 39]

bubblesort(data)

print(data)


