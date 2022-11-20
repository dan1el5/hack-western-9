import livepopulartimes

a = livepopulartimes.get_populartimes_by_address("(Allyn & Betty Taylor Library) 1151 Richmond St, London ON, Canada")

popular_times = a['populartimes']

array = []
for k in popular_times:
    array.append(k['data'])

for i in range(7):
    print(array[i])